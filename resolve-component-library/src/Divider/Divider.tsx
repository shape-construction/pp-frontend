import classNames from 'classnames';
import React from 'react';

export type DividerProps = {
  direction: 'row' | 'column';
};

export const Divider: React.FC<DividerProps> = ({ direction }) => (
  <div className="relative" role="separator" aria-label="divider">
    <div
      className={classNames(
        'absolute bg-gray-300',
        { 'h-full w-[1px]': direction === 'row' },
        { 'h-[1px] w-full': direction === 'column' }
      )}
    />
  </div>
);
