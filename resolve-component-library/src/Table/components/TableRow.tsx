import classNames from 'classnames';
import React from 'react';

export interface TableRowProps extends React.ComponentProps<'tr'> {
  /**
   * alternating striped rows
   */
  striped?: boolean;
}

export const TableRow: React.FC<TableRowProps> = ({ striped, children, ...props }) => {
  const classes = classNames({
    'bg-white': !striped,
    'odd:bg-white even:bg-gray-50': striped,
  });

  return (
    <tr className={classes} {...props}>
      {children}
    </tr>
  );
};
