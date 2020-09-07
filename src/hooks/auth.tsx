import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import getTokenFromHashLocation from '../utils/getTokenFromHashLocation';

interface AuthContextData {
  token?: string | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem('@Spotifood:token');

    if (token) {
      return token;
    }

    return null;
  });

  const location = useLocation();

  useEffect(() => {
    if (!token) {
      const { accessToken } = getTokenFromHashLocation(location.hash);

      if (accessToken) {
        localStorage.setItem('@Spotifood:token', accessToken);

        setToken(accessToken);
      }
    }
  }, [token, location]);

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
