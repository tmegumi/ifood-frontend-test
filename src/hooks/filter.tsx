import React, { createContext, useCallback, useContext, useState } from 'react';

import { FilterQuery } from '../services/playlists';

interface FilterContextData {
  filter?: FilterQuery;
  updateFilter(updatedFilter: FilterQuery): void;
}

interface FilterContextProps {
  children: React.ReactNode;
}

const FilterContext = createContext<FilterContextData>({} as FilterContextData);

const FilterProvider: React.FC<FilterContextProps> = ({
  children,
}: FilterContextProps) => {
  const [filter, setFilter] = useState<FilterQuery>({} as FilterQuery);

  const updateFilter = useCallback((updatedFilter: FilterQuery) => {
    setFilter(updatedFilter);
  }, []);

  return (
    <FilterContext.Provider value={{ filter, updateFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

function useFilter(): FilterContextData {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('useFilter must be used within an AuthProvider');
  }

  return context;
}

export { FilterProvider, useFilter };
