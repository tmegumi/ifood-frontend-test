import React, { useEffect, useState, FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import logIn from '../../services/auth';
import getFeaturePlaylists, {
  FilterQuery,
  PlaylistItemData,
} from '../../services/playlists';

import PlaylistFilter from '../../components/PlaylistFilter';

import { Form, LogInButton, PlaylistItems, Title } from './styles';

const Playlists: React.FC = () => {
  const [items, setItems] = useState<PlaylistItemData[]>([]);
  const [filterName, setFilterName] = useState('');

  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      getFeaturePlaylists(token).then(playlists => {
        setItems(playlists);
      });
    }
  }, [token]);

  async function handleFilterPlaylists(filter: FilterQuery) {
    const playlists = await getFeaturePlaylists(token, filter);

    setItems(playlists);
  }

  function handleSearchPlaylistByName(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!filterName) {
      return;
    }

    const regex = new RegExp(`${filterName}.+$`, 'i');

    const filteredItems = items.filter(item => {
      return item.name.search(regex) !== -1;
    });

    setItems(filteredItems);
  }

  return (
    <>
      <Title>Explore your featured playlists</Title>

      <Form onSubmit={handleSearchPlaylistByName}>
        <input
          value={filterName}
          onChange={e => setFilterName(e.target.value)}
          placeholder="Search by name..."
        />
        <button type="submit">
          <FiSearch size={22} />
        </button>
      </Form>

      <PlaylistFilter onFilterChanged={handleFilterPlaylists} />

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
