import React from 'react';
import { twMerge } from 'tailwind-merge';

export type TableHeaderProps = React.ComponentProps<'th'>;

export const TableHeader: React.FC<TableHeaderProps> = ({ children, className, ...props }) => (
  <th
    scope="col"
    {...props}
    className={twMerge(
      'py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 first:sm:pl-6 last:sm:pr-6',
      className
    )}
  >
    {children}
  </th>
);
