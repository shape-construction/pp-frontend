import * as React from 'react';
import classNames from 'classnames';

export interface SkeletonProps {
  animated?: boolean;
  variant?: 'circle' | 'rectangle';
  className?: string;
}

const Skeleton: React.VFC<SkeletonProps> = ({
  animated = true,
  className,
  variant = 'rectangle',
}) => (
  <div
    className={classNames(
      'bg-gray-300',
      {
        'animate-pulse': animated,
        'rounded-full': variant === 'circle',
        'rounded-md': variant === 'rectangle',
      },
      className
    )}
  />
);

export { Skeleton };
