import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { SplitScreenLeftPanel } from './components/SplitScreenLeftPanel';
import { SplitScreenRightPanel } from './components/SplitScreenRightPanel';

type Components = {
  LeftPanel: typeof SplitScreenLeftPanel;
  RightPanel: typeof SplitScreenRightPanel;
};

export type SplitScreenProps = ComponentProps<'div'>;

export const SplitScreen: React.FC<SplitScreenProps> & Components = ({
  className,
  ...props
}: SplitScreenProps) => (
  <div className={twMerge('flex min-h-screen bg-gray-50', className)} {...props} />
);

SplitScreen.LeftPanel = SplitScreenLeftPanel;
SplitScreen.RightPanel = SplitScreenRightPanel;
