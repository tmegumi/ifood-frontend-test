import axios from 'axios';

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

interface FilterResponse {
  id: string;
  name: string;
  values?: FilterResponseValueItem[];
  validation?: {
    primitiveType: string;
    entityType?: string;
    pattern?: string;
    min?: number;
    max?: number;
  };
}

interface FilterResponseValueItem {
  name: string;
  value: string;
}

export const getFilters = async (): Promise<Filter[]> => {
  const response = await axios.get(
    'http://www.mocky.io/v2/5a25fade2e0000213aa90776',
  );

  const { filters } = response.data;

  return filters.map((filter: FilterResponse) => {
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
