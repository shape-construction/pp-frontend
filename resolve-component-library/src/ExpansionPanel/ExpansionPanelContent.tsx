import { Disclosure } from '@headlessui/react';
import React from 'react';

export const ExpansionPanelContent: React.FC = ({ children }) => (
  <Disclosure.Panel>{children}</Disclosure.Panel>
);
