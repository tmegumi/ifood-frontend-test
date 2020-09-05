import React from 'react';

import Playlists from './pages/Playlists';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Playlists />
      <GlobalStyle />
    </>
  );
};

export default App;
