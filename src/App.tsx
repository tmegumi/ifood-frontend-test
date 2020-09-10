import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AppProvider from './hooks';

import Playlists from './pages/Playlists';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Route path="/" exact component={Playlists} />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
