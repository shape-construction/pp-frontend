import React from 'react';
import { ModalContent, ModalContentProps } from '../../Modal/components/ModalContent';

export type DrawerContentProps = ModalContentProps;

export const DrawerContent: React.FC<ModalContentProps> = (props) => {
  return <ModalContent {...props} className="px-0" />;
};
