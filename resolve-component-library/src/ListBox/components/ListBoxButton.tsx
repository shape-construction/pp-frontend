import React, { ComponentProps } from 'react';
import { ChevronDownIcon } from '../../Icons/solid';
import type { DefaultParams } from '../ListBox';

export interface DefaultButtonProps<T> extends Pick<ComponentProps<'button'>, 'onClick'> {
  label?: string;
  selected?: T;
}

function DefaultButton<T extends DefaultParams>({
  label = 'Group',
  selected,
  ...buttonProps
}: DefaultButtonProps<T>) {
  const title = selected?.name ? selected.name : 'None';

  return (
    <button
      type="button"
      aria-label="listbox-button"
      className="relative flex cursor-pointer rounded-md py-2 text-left focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
      {...buttonProps}
    >
      <span className="inline-flex truncate text-xs sm:text-sm">
        {label && (
          <span className="mr-1 truncate font-medium leading-5 text-gray-400">{label}:</span>
        )}
        <span className="font-normal leading-5 text-gray-900">{title}</span>
      </span>
      <span className="pointer-events-none ml-2 flex items-center ">
        <ChevronDownIcon className="h-5 w-5 text-gray-500 " aria-hidden="true" />
      </span>
    </button>
  );
}

export { DefaultButton };
