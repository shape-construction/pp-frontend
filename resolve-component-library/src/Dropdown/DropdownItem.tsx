import { Menu } from '@headlessui/react';
import classNames from 'classnames';
import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type DropdownItemProps = Parameters<typeof Menu.Item>[0] & {
  color?: 'default' | 'danger';
  icon?: React.FC<ComponentProps<'svg'>>;
  endAdornment?: React.ReactNode;
};

export const DropdownItem: React.FC<DropdownItemProps> = ({
  as = 'button',
  color = 'default',
  children,
  className,
  icon: Icon,
  endAdornment,
  ...props
}) => (
  <Menu.Item
    as={as}
    className={twMerge(
      classNames(
        'flex w-full items-center gap-3 py-2 px-4 ui-active:bg-gray-100 ui-disabled:cursor-default ui-disabled:opacity-50',
        className
      )
    )}
    {...props}
  >
    {Icon && (
      <Icon
        aria-label="dropdown-item-icon"
        className={classNames('h-4 w-4', {
          'text-gray-400 ui-active:text-gray-500': color === 'default',
          'text-red-400 ui-active:text-red-500': color === 'danger',
        })}
      />
    )}
    <span
      className={classNames('flex-1 text-left text-sm font-normal leading-5', {
        'text-gray-700 ui-active:text-gray-900': color === 'default',
        'text-red-700 ui-active:text-red-900': color === 'danger',
      })}
    >
      {children}
    </span>
    {endAdornment}
  </Menu.Item>
);
