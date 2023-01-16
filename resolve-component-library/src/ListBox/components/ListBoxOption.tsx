import React from 'react';
import classNames from 'classnames';
import { Listbox } from '@headlessui/react';
import { CheckIcon } from '../../Icons/solid';
import type { DefaultParams } from '../ListBox';

export interface ListBoxOptionProps<T> {
  className?: string;
  disabled?: boolean;
  option: T;
}

export function ListBoxOption<T extends DefaultParams>({
  className,
  disabled,
  option,
}: ListBoxOptionProps<T>) {
  return (
    <Listbox.Option
      key={option.name}
      className={({ active }) =>
        classNames(
          'relative flex cursor-pointer select-none px-4 py-3 text-sm last:pb-6',
          active ? 'bg-indigo-500 text-white' : 'text-gray-900',
          className
        )
      }
      disabled={disabled}
      value={option}
    >
      {({ selected, active, disabled: isDisabled }) => (
        <div className="flex w-full flex-col">
          <div className="flex justify-between">
            <p
              className={classNames(
                'text-sm leading-5',
                selected ? 'font-semibold' : 'font-normal',
                isDisabled && 'opacity-50'
              )}
            >
              {option.name}
            </p>
            {selected ? (
              <span
                role="img"
                aria-label="option check"
                className={classNames('ml-4', active ? 'text-white' : 'text-indigo-500')}
              >
                <CheckIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            ) : null}
          </div>
          {option.description && (
            <p
              className={classNames(
                'mt-2 text-sm font-normal leading-5',
                active ? 'text-indigo-200' : 'text-gray-500'
              )}
            >
              {option.description}
            </p>
          )}
        </div>
      )}
    </Listbox.Option>
  );
}
