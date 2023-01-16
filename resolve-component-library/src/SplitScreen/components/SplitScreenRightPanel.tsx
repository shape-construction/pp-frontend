import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export type SplitScreenRightPanelProps = ComponentProps<'div'>;

export const SplitScreenRightPanel: React.FC<SplitScreenRightPanelProps> = ({
  className,
  ...props
}: SplitScreenRightPanelProps) => (
  <div className={twMerge('relative hidden w-0 flex-1 lg:block', className)} {...props} />
);
