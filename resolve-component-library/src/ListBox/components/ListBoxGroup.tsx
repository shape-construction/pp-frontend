import React from 'react';
import classNames from 'classnames';

export interface ListBoxGroupProps {
  className?: string;
  label: string;
}

export function ListBoxGroup({ className, label }: ListBoxGroupProps) {
  return (
    <div role="group" key={label} className={classNames('px-4 py-3', className)}>
      <div className="w-full">
        <p className="text-xs font-semibold uppercase leading-4 tracking-wider text-gray-400">
          {label}
        </p>
      </div>
    </div>
  );
}
