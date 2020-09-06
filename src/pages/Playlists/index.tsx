import React, { useEffect, useState } from 'react';

import { useAuth } from '../../hooks/auth';

import logIn from '../../services/auth';
import { PlaylistItem, getFeaturePlaylists } from '../../services/playlists';

import { Form, LogInButton, PlaylistItems, Title } from './styles';

const Playlists: React.FC = () => {
  const [items, setItems] = useState<PlaylistItem[]>([]);

  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      getFeaturePlaylists(token).then(playlists => {
        setItems(playlists);
      });
    }
  }, [token]);

  return (
    <>
      <Title>Explore your featured playlists</Title>

      <Form>
        <input placeholder="Search" />
        <button type="submit">Search</button>
      </Form>

      {!token && <LogInButton onClick={logIn}>Login to Spotify</LogInButton>}

      {token && items && (
        <PlaylistItems>
          {items.map(item => (
            <a key={item.id} href={item.external_urls.spotify}>
              <img src={item.images[0].url} alt={item.name} />

              <div>
                <strong>{item.name}</strong>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </PlaylistItems>
      )}
    </>
  );
};

export default Playlists;
