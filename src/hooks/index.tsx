import React from 'react';

import { AuthProvider } from './auth';
import { FilterProvider } from './filter';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({
  children,
}: AppProviderProps) => (
  <AuthProvider>
    <FilterProvider>{children}</FilterProvider>
  </AuthProvider>
);

export default AppProvider;
