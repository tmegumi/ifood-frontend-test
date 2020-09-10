import React, { useCallback, useEffect, useState, ChangeEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaSpotify } from 'react-icons/fa';

import { useAuth } from '../../hooks/auth';
import { useFilter } from '../../hooks/filter';

import authenticate from '../../services/auth';

import {
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
  const { filter } = useFilter();

  const getPlaylistsItems = useCallback(() => {
    if (token) {
      getFeaturePlaylists(token, filter).then(playlists => {
        setInitialItems(playlists);
        setItems(playlists);
        setIsLoadingItems(false);
      });
    }
  }, [token, filter]);

  useEffect(() => {
    getPlaylistsItems();

    const timerID = setInterval(() => {
      getPlaylistsItems();
    }, 30000);

    return () => clearInterval(timerID);
  }, [getPlaylistsItems]);

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
          <Title>Explore as playlists em destaque</Title>

          {!token && (
            <>
              <Subtitle>
                Aqui você encontra a melhor seleção de playlists
              </Subtitle>
              <LogInButton onClick={authenticate}>
                <FaSpotify size={18} />
                Conectar com Spotify
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
                placeholder="Pesquisar por nome..."
              />
            </SearchNameForm>

            <PlaylistFilter />

            <Loader isLoading={isLoadingItems} />

            {items && <PlaylistItems items={items} />}
          </>
        )}
      </Content>
    </Container>
  );
};

export default Playlists;
