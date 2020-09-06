import axios from 'axios';

import filter from '../constants/filter.json';

interface PlaylistItemImage {
  url: string;
}

export interface PlaylistItem {
  description: string;
  external_urls: {
    spotify: string;
  };
  images: PlaylistItemImage[];
  id: string;
  name: string;
}

export const getFeaturePlaylists = async (
  token: string,
): Promise<PlaylistItem[]> => {
  const response = await axios.get(
    'https://api.spotify.com/v1/browse/featured-playlists',
    {
      params: {
        filter,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data.playlists.items;
};
