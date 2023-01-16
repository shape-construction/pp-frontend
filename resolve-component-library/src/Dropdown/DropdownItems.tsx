import React, { ComponentProps } from 'react';
import { Menu, Portal } from '@headlessui/react';
import { breakpoints, useMediaQuery } from '../hooks';

export const DropdownItems = React.forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ style, children, ...props }, ref) => {
    const isSmallScreen = useMediaQuery(breakpoints.down('md'));

    if (isSmallScreen) {
      return (
        <Menu.Items className="block md:hidden">
          <div
            role="none"
            className="overflow-none pointer-events-none fixed left-0 top-0 z-popover h-screen w-screen bg-gray-800 bg-opacity-75 backdrop-filter"
          />
          <div className="fixed left-0 bottom-0 z-popover w-full rounded-t-md bg-white shadow-lg">
            {children}
          </div>
        </Menu.Items>
      );
    }

    return (
      <Portal>
        <Menu.Items
          className="z-popover flex w-56 flex-col items-start rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          ref={ref}
          style={style}
          {...props}
        >
          {children}
        </Menu.Items>
      </Portal>
    );
  }
);
DropdownItems.displayName = 'DropdownItems';
