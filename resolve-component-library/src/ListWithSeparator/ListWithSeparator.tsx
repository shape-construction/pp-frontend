import { ChevronRightIcon } from '../Icons/outline';
import classNames from 'classnames';
import React, { ReactNode } from 'react';

export interface ListWithSeparatorProps {
  /**
   * The items to render as a list
   */
  children: ReactNode;
  /**
   * customised class
   */
  className?: string;
  /**
   * The node to render as the separator
   */
  separator?: ReactNode;
}

export const ListWithSeparator: React.FC<ListWithSeparatorProps> = ({
  children,
  className,
  separator = <ChevronRightIcon className="h-3 w-3 flex-shrink-0 text-gray-400" />,
}) => {
  if (!children) return null;

  // using React.Children.toArray() because it converts 'children' to an array
  // and also removes booleans, nulls and functions (i.e. invalid children).
  const childrenWithSeparator = React.Children.toArray(children).reduce(
    (accu: any[], elem, index) => {
      // add a separator if we're not the first item
      if (index !== 0) accu.push(separator);
      accu.push(elem);
      return accu;
    },
    []
  );

  const computedClassName = classNames('flex items-center flex-wrap inline gap-x-2', className);

  return (
    <div className={computedClassName}>
      {React.Children.map(childrenWithSeparator, (child) => child)}
    </div>
  );
};
