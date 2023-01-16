import React from 'react';
import classNames from 'classnames';

export interface DetailItemInlineProps {
  label: string;
  value: string;
}

const itemClassNames = classNames('text-sm leading-5');

export const DetailItemInline: React.FC<DetailItemInlineProps> = ({ label, value }) => (
  <div className="flex gap-1 py-0.5">
    <span className={classNames(itemClassNames, 'text-gray-400')}>{label}:</span>
    <span className={itemClassNames}>{value}</span>
  </div>
);
