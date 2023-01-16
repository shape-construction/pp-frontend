import React from 'react';
import { ModalFooter, ModalFooterProps } from '../../Modal/components/ModalFooter';

export type DrawerFooterProps = ModalFooterProps;

export const DrawerFooter: React.FC<DrawerFooterProps> = (props) => {
  return <ModalFooter topBorder {...props} className="flex flex-row gap-7 p-6" />;
};
