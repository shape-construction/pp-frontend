import React from 'react';

export type TableBodyProps = React.ComponentProps<'tbody'>;

export const TableBody: React.FC<TableBodyProps> = ({ children, ...props }) => (
  <tbody className="bg-white" {...props}>
    {children}
  </tbody>
);
