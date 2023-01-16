import classNames from 'classnames';
import React, { ComponentProps } from 'react';

const ProgressBarActiveColorMap = {
  primary: 'bg-indigo-500',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  danger: 'bg-red-500',
};

const ProgressBarSizeMap = {
  small: 'h-1',
  medium: 'h-2',
  large: 'h-3',
};

export type ProgressBarActiveColor = 'primary' | 'success' | 'warning' | 'danger';

export type ProgressBarSize = 'small' | 'medium' | 'large';

export type ProgressBarProps = ComponentProps<'div'> & {
  color?: ProgressBarActiveColor;
  label?: string;
  percentage: number;
  size?: ProgressBarSize;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  color = 'primary',
  label,
  percentage,
  size = 'medium',
  className,
  ...progressBarProps
}) => (
  <div className="flex flex-col space-y-1">
    {label && (
      <div className="flex justify-between text-sm font-medium leading-5">
        <span className="text-gray-700 dark:text-white">{label}</span>
        <span className="text-gray-500 dark:text-gray-300">{percentage}%</span>
      </div>
    )}
    <div
      role="progressbar"
      aria-valuenow={percentage}
      className={classNames(
        'w-full rounded-full bg-gray-900 bg-opacity-[.08] dark:bg-white dark:bg-opacity-[.2]',
        ProgressBarSizeMap[size],
        className
      )}
      {...progressBarProps}
    >
      <div
        className={classNames(
          'rounded-full bg-indigo-500',
          ProgressBarSizeMap[size],
          ProgressBarActiveColorMap[color]
        )}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default ProgressBar;
