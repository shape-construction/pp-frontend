import React, { ReactElement } from 'react';
import classnames from 'classnames';

export interface IconTitleProps {
  icon: ReactElement;
  color: 'red' | 'green' | 'blue';
  title: string;
  subtitle?: string;
}
export const IconTitle: React.FC<IconTitleProps> = ({ icon, color, title, subtitle }) => (
  <div className="flex items-center">
    <div
      className={classnames('self-start rounded-full p-2', {
        'bg-red-200 text-red-600': color === 'red',
        'bg-green-200 text-green-600': color === 'green',
        'bg-blue-200 text-blue-600': color === 'blue',
      })}
      style={{ width: '40px', height: '40px' }}
    >
      {icon}
    </div>
    <div className="flex flex-col justify-center ml-4">
      <span className="text-lg font-medium text-gray-900">{title}</span>
      {subtitle && <span className="mt-1.5 font-normal text-gray-400">{subtitle}</span>}
    </div>
  </div>
);
