import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

export interface NotificationBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * When active, it will show the notification badge, else it will only render the children
   */
  active?: boolean;
  /**
   * Text that will be set inside the badge component
   */
  text?: string;
}

const classes = {
  root: 'absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full',
  withText:
    'inline-flex px-1.5 py-0.5 text-xs leading-4 font-medium leading-none items-center justify-center',
  withoutText: 'inline-block w-2 h-2',
};

const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  active,
  children,
  className,
  text,
  ...props
}) => (
  <div className="relative inline-block">
    {children}
    {active && (
      <span
        role="status"
        aria-label="notification"
        className={classNames(
          {
            [classes.root]: true,
            [classes.withText]: text,
            [classes.withoutText]: !text,
          },
          className
        )}
        {...props}
      >
        {text}
      </span>
    )}
  </div>
);

export default NotificationBadge;
