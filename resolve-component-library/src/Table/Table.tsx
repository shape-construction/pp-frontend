import React from 'react';
import { twMerge } from 'tailwind-merge';
import { TableBody } from './components/TableBody';
import { TableCell } from './components/TableCell';
import { TableHeader } from './components/TableHeader';
import { TableHeading } from './components/TableHeading';
import { TableRow } from './components/TableRow';
import { TableContainer } from './components/TableContainer';

type Components = {
  Heading: typeof TableHeading;
  Body: typeof TableBody;
  Row: typeof TableRow;
  Header: typeof TableHeader;
  Cell: typeof TableCell;
  Container: typeof TableContainer;
};

export interface TableProps extends React.ComponentProps<'table'> {
  children: React.ReactNode;
}

export const Table: React.FC<TableProps> & Components = ({ children, className, ...rest }) => {
  return (
    <table className={twMerge('min-w-full divide-y divide-gray-300', className)} {...rest}>
      {children}
    </table>
  );
};

Table.Heading = TableHeading;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Header = TableHeader;
Table.Cell = TableCell;
Table.Container = TableContainer;
