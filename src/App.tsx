import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { AuthProvider } from './hooks/auth';
import Playlists from './pages/Playlists';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Route path="/" exact component={Playlists} />
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
