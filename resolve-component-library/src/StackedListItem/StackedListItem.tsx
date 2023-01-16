import React, { MouseEventHandler } from 'react';
import classnames from 'classnames';

export interface StackedListItemProps {
  /**
   * The content to be rendered inside the list item
   */
  children: React.ReactNode;

  /**
   * Optional click handler for clicking on the stacked list item
   */
  onClick?: MouseEventHandler;
}

export const StackedListItem: React.FC<StackedListItemProps> = ({
  children,
  onClick,
}: StackedListItemProps) => {
  const listItemClassnames = classnames('flex items-center', {
    'cursor-pointer': onClick,
  });
  const divClassnames = 'flex w-full items-center px-4 py-4 sm:px-6';

  return (
    <li className={listItemClassnames}>
      {onClick ? (
        // having a separate case for onClick as the linter has problems handling
        // conditional statements or JS variables in "role" property
        <div className={divClassnames} onClick={onClick} role="link" tabIndex={0}>
          {children}
        </div>
      ) : (
        <div className={divClassnames}>{children}</div>
      )}
    </li>
  );
};
