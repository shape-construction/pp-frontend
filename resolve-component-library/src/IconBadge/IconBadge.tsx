import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

export type BadgeType = 'info' | 'danger' | 'warning' | 'success' | 'default';
export type Pallete = { [key in BadgeType]: { badge: string; icon: string } };

const palette: Pallete = {
  default: {
    badge: `bg-gray-100`,
    icon: `text-gray-600`,
  },
  info: {
    badge: `bg-indigo-100`,
    icon: `text-indigo-600`,
  },
  warning: {
    badge: `bg-yellow-100`,
    icon: `text-yellow-600`,
  },
  danger: {
    badge: `bg-red-100`,
    icon: `text-red-600`,
  },
  success: {
    badge: `bg-green-100`,
    icon: `text-green-600`,
  },
};

export type IconBadgeProps = {
  className?: string;
  type?: BadgeType;
};

export const IconBadge: React.FC<IconBadgeProps> = ({ className, children, type = 'default' }) => {
  const currentColor = palette[type];

  const Icon = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    return React.cloneElement(child as ReactElement, {
      'data-testid': 'icon-badge',
      'className': twMerge(currentColor.icon, 'h-6 w-6', child.props.className),
    });
  });

  return (
    <div
      role="figure"
      className={twMerge(
        currentColor.badge,
        'mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10',
        className
      )}
    >
      {Icon}
    </div>
  );
};
