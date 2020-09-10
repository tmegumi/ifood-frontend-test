import React, { useEffect, useState, ChangeEvent } from 'react';
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

import {
  Container,
  Content,
  ContentHeader,
  LogInButton,
  Logo,
  SearchNameForm,
  Subtitle,
  Title,
} from './styles';

const Playlists: React.FC = () => {
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

  function handleSearchPlaylistByName(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.value;

    if (!name) {
      setItems(initialItems);
      return;
    }

    const regex = new RegExp(`${name}.+$`, 'i');

    const filteredItems = initialItems.filter(item => {
      return item.name.search(regex) !== -1;
    });

    setItems(filteredItems);
  }

  return (
    <Container>
      <Content>
        <ContentHeader hasToken={token?.length !== 0}>
          <Logo>
            <FaSpotify size={24} />
            <strong>Spotifood</strong>
          </Logo>
          <Title>Explore featured playlists</Title>

          {!token && (
            <>
              <Subtitle>
                Find features playlists from whenever you want
              </Subtitle>
              <LogInButton onClick={logIn}>
                <FaSpotify size={18} />
                Connect with Spotify
              </LogInButton>
            </>
          )}
        </ContentHeader>

        {token && (
          <>
            <SearchNameForm>
              <FiSearch size={20} />
              <input
                onChange={handleSearchPlaylistByName}
                placeholder="Search by name..."
              />
            </SearchNameForm>

            <PlaylistFilter onFilterChanged={handleFilterPlaylists} />

            <Loader isLoading={isLoadingItems} />

            {items && <PlaylistItems items={items} />}
          </>
        )}
      </Content>
    </Container>
  );
};

export default Playlists;
