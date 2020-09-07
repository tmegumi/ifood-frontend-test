import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import filtersData from '../../constants/filters.json';

import { FilterQuery } from '../../services/playlists';

import { Container, FilterItem } from './styles';

interface PlaylistFilterProps {
  onFilterChanged(filter: FilterQuery): void;
}

interface Filter {
  id: string;
  name: string;
  values?: ValueItem[];
  validation?: {
    primitiveType: string;
    entityType?: string;
    pattern?: string;
    min?: number;
    max?: number;
  };
}

interface ValueItem {
  name: string;
  label: string;
}

const PlaylistFilter: React.FC<PlaylistFilterProps> = ({
  onFilterChanged,
}: PlaylistFilterProps) => {
  const [locale, setLocale] = useState<Filter>({} as Filter);
  const [country, setCountry] = useState<Filter>({} as Filter);
  const [dateTime, setDateTime] = useState<Filter>({} as Filter);
  const [limit, setLimit] = useState<Filter>({} as Filter);
  const [offset, setOffset] = useState<Filter>({} as Filter);

  const [selectedLocale, setSelectedLocale] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [selectedLimit, setSelectedLimit] = useState('');
  const [selectedOffset, setSelectedOffset] = useState('');

  useEffect(() => {
    filtersData.filters.forEach(filter => {
      let valueItems = null;

      if (filter.values) {
        valueItems = filter.values.map(value => {
          return {
            name: value.name,
            label: value.value,
          };
        });
      }

      const filterItem = {
        id: filter.id,
        name: filter.name,
        values: valueItems,
        validation: filter.validation,
      } as Filter;

      if (filter.id === 'locale') {
        setLocale(filterItem);
      } else if (filter.id === 'country') {
        setCountry(filterItem);
      } else if (filter.id === 'timestamp') {
        setDateTime(filterItem);
      } else if (filter.id === 'limit') {
        setLimit(filterItem);
      } else if (filter.id === 'offset') {
        setOffset(filterItem);
      }
    });
  }, []);

  function handlePlaylistFilter() {
    onFilterChanged({
      locale: selectedLocale,
      country: selectedCountry,
      timestamp: selectedDateTime,
      limit: selectedLimit,
      offset: selectedOffset,
    });
  }

  return (
    <Container>
      <FilterItem>
        <Select
          classNamePrefix="react-select"
          placeholder={locale.name}
          options={locale.values}
          onChange={e => setSelectedLocale((e as ValueItem)?.label)}
        />
      </FilterItem>
      <FilterItem>
        <Select
          classNamePrefix="react-select"
          placeholder={country.name}
          options={country.values}
          onChange={e => setSelectedCountry((e as ValueItem)?.label)}
        />
      </FilterItem>
      <FilterItem>
        <input
          name={dateTime.id}
          placeholder={dateTime.name}
          value={selectedDateTime}
          onChange={e => setSelectedDateTime(e.target.value)}
        />
      </FilterItem>
      <FilterItem>
        <input
          name={limit.id}
          placeholder={limit.name}
          value={selectedLimit}
          onChange={e => setSelectedLimit(e.target.value)}
        />
      </FilterItem>
      <FilterItem>
        <input
          name={offset.id}
          placeholder={offset.name}
          value={selectedOffset}
          onChange={e => setSelectedOffset(e.target.value)}
        />
      </FilterItem>
      <button type="submit" onClick={handlePlaylistFilter}>
        Filter
      </button>
    </Container>
  );
};

export default PlaylistFilter;
