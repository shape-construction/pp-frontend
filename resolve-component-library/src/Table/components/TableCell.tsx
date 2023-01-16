import React from 'react';
import { twMerge } from 'tailwind-merge';

export type TableCellProps = React.ComponentProps<'td'>;

export const TableCell: React.FC<TableCellProps> = ({ children, ...props }) => (
  <td
    {...props}
    className={twMerge(
      'whitespace-nowrap px-3 py-4 text-sm text-gray-500 first:sm:pl-6 last:sm:pr-6',
      props.className
    )}
  >
    {children}
  </td>
);
