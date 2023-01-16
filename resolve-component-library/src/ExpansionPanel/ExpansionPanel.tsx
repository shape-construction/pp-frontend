import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ExpansionPanelHeader } from './ExpansionPanelHeader';
import { ExpansionPanelContent } from './ExpansionPanelContent';

type Components = {
  Header: typeof ExpansionPanelHeader;
  Content: typeof ExpansionPanelContent;
};

export interface ExpandablePanelProps {
  /**
   * expanded content
   */
  children: React.ReactNode;
  /**
   * classnames to be added to the main component
   */
  className?: string;
  /**
   * if content should be initially expanded or not
   */
  defaultOpen?: boolean;
}

export const ExpansionPanel: React.FC<ExpandablePanelProps> & Components = ({
  children,
  defaultOpen,
  className,
}) => {
  return (
    <Disclosure as="div" className={className} defaultOpen={defaultOpen}>
      {children}
    </Disclosure>
  );
};

ExpansionPanel.Header = ExpansionPanelHeader;
ExpansionPanel.Content = ExpansionPanelContent;
