import axios from 'axios';

import getTextWithoutHTMLTags from '../utils/getTextWithoutHTMLTags';

export interface FilterQuery {
  locale?: string;
  country?: string;
  timestamp?: Date | null;
  limit?: string;
  offset?: string;
}

export interface PlaylistItemData {
  description: string;
  external_urls: {
    spotify: string;
  };
  images: PlaylistItemImage[];
  id: string;
  name: string;
}

interface PlaylistItemImage {
  url: string;
}

interface QueryParams {
  [key: string]: string;
}

export const getFeaturePlaylists = async (
  token: string,
  filter?: FilterQuery,
): Promise<PlaylistItemData[]> => {
  const params = {} as QueryParams;

  if (filter?.locale) {
    params.locale = filter.locale;
  }
  if (filter?.country) {
    params.country = filter.country;
  }
  if (filter?.timestamp) {
    params.timestamp = filter.timestamp.toISOString();
  }
  if (filter?.limit) {
    params.limit = filter.limit;
  }
  if (filter?.offset) {
    params.offset = filter.offset;
  }

  const response = await axios.get(
    'https://api.spotify.com/v1/browse/featured-playlists',
    {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const { items } = response.data.playlists;

  return items.map((item: PlaylistItemData) => ({
    ...item,
    description: getTextWithoutHTMLTags(item.description),
  }));
};
