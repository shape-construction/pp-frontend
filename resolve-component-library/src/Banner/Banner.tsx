import classNames from 'classnames';
import React, { ReactNode } from 'react';

export type BannerProps = {
  /**
   * Icon to render before the children
   */
  icon: ReactNode;
  /**
   * Message to display in banner
   */
  message: string;
  /**
   * Floating variant
   */
  floating?: boolean;
  /**
   * Centered variant
   */
  centered?: boolean;
};

export const Banner: React.FC<BannerProps> = ({ icon, message, floating, centered }) => (
  <div
    className={classNames('flex w-full items-center gap-x-2.5 bg-yellow-50', {
      'rounded-md border border-yellow-100 p-3': floating,
      'p-1.5': !floating,
      'justify-center': centered,
    })}
    role="alert"
  >
    <span className="h-5 w-5 text-yellow-400">{icon}</span>
    <span className="text-sm font-medium text-yellow-800">{message}</span>
  </div>
);
