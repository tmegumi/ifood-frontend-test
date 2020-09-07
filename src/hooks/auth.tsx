import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import getTokenFromHashLocation from '../utils/getTokenFromHashLocation';

interface AuthContextData {
  token: string;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const [token, setToken] = useState('');

  const location = useLocation();

  useEffect(() => {
    const { accessToken } = getTokenFromHashLocation(location.hash);

    setToken(accessToken);
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
