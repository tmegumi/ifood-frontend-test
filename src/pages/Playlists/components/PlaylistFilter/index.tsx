import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

import Select from 'react-select';
import DatePicker from 'react-datepicker';

import {
  Filter,
  FilterQuery,
  FilterValueItem,
  getPlaylistFilters,
} from '../../../../services/playlists';

import { Form, FormItem } from './styles';

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
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
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

  function handleLimitInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);

    if (!value) {
      setSelectedLimit('');
    }

    if (
      limit.validation &&
      (value < Number(limit.validation.min) ||
        value > Number(limit.validation?.max))
    ) {
      return;
    }

    setSelectedLimit(value.toString());
  }

  function handlePlaylistFilter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onFilterChanged({
      locale: selectedLocale,
      country: selectedCountry,
      timestamp: selectedDateTime,
      limit: selectedLimit,
      offset: selectedOffset,
    });
  }

  return (
    <Form onSubmit={handlePlaylistFilter}>
      <FormItem>
        <Select
          classNamePrefix="react-select"
          placeholder={locale.name}
          options={locale.values}
          onChange={e => setSelectedLocale((e as FilterValueItem)?.name)}
        />
      </FormItem>
      <FormItem>
        <Select
          classNamePrefix="react-select"
          placeholder={country.name}
          options={country.values}
          onChange={e => setSelectedCountry((e as FilterValueItem)?.name)}
        />
      </FormItem>
      <FormItem>
        <DatePicker
          showTimeInput
          name={dateTime.id}
          placeholderText={dateTime.name}
          selected={selectedDateTime}
          dateFormat="yyyy/MM/dd HH:mm"
          timeFormat="HH:mm"
          onChange={date => setSelectedDateTime(date as Date)}
        />
      </FormItem>
      <FormItem>
        <input
          name={limit.id}
          placeholder={limit.name}
          value={selectedLimit}
          onChange={handleLimitInputChange}
          type="number"
        />
      </FormItem>
      <FormItem>
        <input
          name={offset.id}
          placeholder={offset.name}
          value={selectedOffset}
          onChange={e => setSelectedOffset(e.target.value)}
          type="number"
        />
      </FormItem>
      <button type="submit">Filter</button>
    </Form>
  );
};

export default PlaylistFilter;
