import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type SplitScreenLeftPanelProps = ComponentProps<'div'> & {
  children: React.ReactNode;
};

export const SplitScreenLeftPanel: React.FC<SplitScreenLeftPanelProps> = ({
  children,
  className,
  ...props
}: SplitScreenLeftPanelProps) => (
  <div
    className={twMerge(
      'mx-auto my-auto box-content flex w-full max-w-sm flex-1 flex-col py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24',
      className
    )}
    {...props}
  >
    <div className="box-border">{children}</div>
  </div>
);
