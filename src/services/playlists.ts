import axios from 'axios';

import filtersData from '../constants/filters.json';

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

export interface Filter {
  id: string;
  name: string;
  values?: FilterValueItem[];
  validation?: {
    primitiveType: string;
    entityType?: string;
    pattern?: string;
    min?: number;
    max?: number;
  };
}

export interface FilterValueItem {
  name: string;
  label: string;
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
    params.timestamp = filter.timestamp.toISOString()
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

  return response.data.playlists.items;
};

export const getPlaylistFilters = (): Filter[] => {
  return filtersData.filters.map(filter => {
    let valueItems = null;

    if (filter.values) {
      valueItems = filter.values.map(value => {
        return {
          name: value.value,
          label: value.name,
        };
      });
    }

    return {
      id: filter.id,
      name: filter.name,
      values: valueItems,
      validation: filter.validation,
    } as Filter;
  });
};
