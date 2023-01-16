import React from 'react';
import { twMerge } from 'tailwind-merge';

export type TableContainerProps = React.ComponentProps<'div'>;

export const TableContainer: React.FC<TableContainerProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={twMerge(
        'overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
