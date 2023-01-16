import React from 'react';

export type TableHeadingProps = React.ComponentProps<'thead'>;

export const TableHeading: React.FC<TableHeadingProps> = ({ children, ...props }) => (
  <thead className="bg-gray-50" {...props}>
    {children}
  </thead>
);
