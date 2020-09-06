import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Playlists from './pages/Playlists';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Playlists} />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
