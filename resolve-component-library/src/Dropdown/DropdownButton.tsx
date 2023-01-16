import { Menu } from '@headlessui/react';
import React, { Fragment } from 'react';

export const DropdownButton: React.FC = ({ children }) => (
  <Menu.Button as={Fragment}>{children}</Menu.Button>
);
