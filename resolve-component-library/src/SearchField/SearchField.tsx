import { SearchIcon } from '../Icons/outline';
import { useDebounceCallback } from '@react-hook/debounce';
import React from 'react';

export type SearchFieldProps = {
  /**
   * Text to render when there's no value
   */
  placeholder?: string;
  /**
   * Callback called when user changes the search value. It is debounced for 300ms
   */
  onChange: (value: string) => void;
};

export const SearchField: React.FC<SearchFieldProps> = ({ placeholder = 'Search', onChange }) => {
  const debouncedOnChange = useDebounceCallback(onChange, 250);

  return (
    <div className="flex w-full">
      <div className="relative w-full text-gray-500 focus-within:text-gray-900">
        <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center">
          <SearchIcon className="h-4 w-4" aria-hidden="true" />
        </div>
        <input
          className="h-full w-full rounded-md border-0 py-2 pl-9 pr-3 placeholder-gray-500 ring-0 focus:placeholder-gray-400 focus:ring-indigo-500 sm:text-sm"
          placeholder={placeholder}
          type="search"
          name="search"
          onChange={(event) => debouncedOnChange(event.target.value)}
        />
      </div>
    </div>
  );
};
