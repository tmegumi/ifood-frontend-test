import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import { Filter, FilterQuery, FilterValueItem, getPlaylistFilters } from '../../../../services/playlists';

import { Container, FilterItem } from './styles';

interface PlaylistFilterProps {
  onFilterChanged(filter: FilterQuery): void;
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
    getPlaylistFilters().forEach(filter => {
      if (filter.id === 'locale') {
        setLocale(filter);
      } else if (filter.id === 'country') {
        setCountry(filter);
      } else if (filter.id === 'timestamp') {
        setDateTime(filter);
      } else if (filter.id === 'limit') {
        setLimit(filter);
      } else if (filter.id === 'offset') {
        setOffset(filter);
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
          onChange={e => setSelectedLocale((e as FilterValueItem)?.label)}
        />
      </FilterItem>
      <FilterItem>
        <Select
          classNamePrefix="react-select"
          placeholder={country.name}
          options={country.values}
          onChange={e => setSelectedCountry((e as FilterValueItem)?.label)}
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
