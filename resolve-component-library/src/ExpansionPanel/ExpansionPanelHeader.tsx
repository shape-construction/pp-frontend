import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '../Icons/solid';
import classNames from 'classnames';
import React from 'react';

export const ExpansionPanelHeader: React.FC = ({ children }) => (
  <Disclosure.Button className="w-full">
    {({ open }) => (
      <header
        className={classNames(
          'flex w-full items-center justify-between rounded-md p-1  text-sm font-medium leading-5',
          {
            'hover:bg-gray-100': !open,
          }
        )}
      >
        <div className="flex w-full items-center justify-start">{children}</div>

        <ChevronDownIcon
          className={classNames('ml-2 h-5 w-5 text-gray-700', {
            'rotate-180 transform': open,
          })}
          aria-hidden="true"
        />
      </header>
    )}
  </Disclosure.Button>
);
