import React from 'react';

import { Container } from './styles';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }: LoaderProps) => {
  return <>{isLoading && <Container />}</>;
};

export default Loader;
