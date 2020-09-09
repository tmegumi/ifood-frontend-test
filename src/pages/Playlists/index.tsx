import React, { useEffect, useState, FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaSpotify } from 'react-icons/fa';

import { useAuth } from '../../hooks/auth';

import logIn from '../../services/auth';

import {
  FilterQuery,
  PlaylistItemData,
  getFeaturePlaylists,
} from '../../services/playlists';

import Loader from '../../components/Loader';
import PlaylistFilter from './components/PlaylistFilter';
import PlaylistItems from './components/PlaylistItems';

import { SearchNameForm, LogInButton, Logo, Subtitle, Title } from './styles';

const Playlists: React.FC = () => {
  const [filterName, setFilterName] = useState('');
  const [initialItems, setInitialItems] = useState<PlaylistItemData[]>([]);
  const [items, setItems] = useState<PlaylistItemData[]>([]);
  const [isLoadingItems, setIsLoadingItems] = useState(true);

  const { token } = useAuth();

  function setItemsLoaded(playlists: PlaylistItemData[]) {
    setInitialItems(playlists);
    setItems(playlists);
    setIsLoadingItems(false);
  }

  useEffect(() => {
    if (token) {
      getFeaturePlaylists(token).then(playlists => {
        setItemsLoaded(playlists);
      });
    }
  }, [token]);

  async function handleFilterPlaylists(filter: FilterQuery) {
    if (token) {
      const playlists = await getFeaturePlaylists(token, filter);

      setItemsLoaded(playlists);
    }
  }

  function handleSearchPlaylistByName(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!filterName) {
      setItems(initialItems);
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
      <Logo>
        <FaSpotify size={24} />
        <strong>Spotifood</strong>
      </Logo>

      <Title>Explore your featured playlists</Title>

      {!token && (
        <>
          <Subtitle>Start exploring your features playlists</Subtitle>
          <LogInButton onClick={logIn}>
            <FaSpotify size={18} />
            Connect with Spotify
          </LogInButton>
        </>
      )}

      {token && (
        <>
          <SearchNameForm onSubmit={handleSearchPlaylistByName}>
            <input
              value={filterName}
              onChange={e => setFilterName(e.target.value)}
              placeholder="Search by name..."
            />
            <button type="submit">
              <FiSearch size={22} />
            </button>
          </SearchNameForm>

          <PlaylistFilter onFilterChanged={handleFilterPlaylists} />

          <Loader isLoading={isLoadingItems} />

          {items && <PlaylistItems items={items} />}
        </>
      )}
    </>
  );
};

export default Playlists;
