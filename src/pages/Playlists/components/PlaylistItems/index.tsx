import React from 'react';

import { Container } from './styles';

import { PlaylistItemData } from '../../../../services/playlists';

interface PlaylistItemsProps {
  items: PlaylistItemData[];
}

const PlaylistItems: React.FC<PlaylistItemsProps> = ({
  items,
}: PlaylistItemsProps) => {
  return (
    <Container>
      {items.map(item => (
        <a key={item.id} href={item.external_urls.spotify}>
          <img src={item.images[0].url} alt={item.name} />

          <div>
            <strong>{item.name}</strong>
            <p>{item.description}</p>
          </div>
        </a>
      ))}
    </Container>
  );
};

export default PlaylistItems;
