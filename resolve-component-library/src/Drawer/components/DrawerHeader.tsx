import React from 'react';
import { ModalHeader, ModalHeaderProps } from '../../Modal/components/ModalHeader';
import { ModalTitle, ModalSubTitle } from '../../Modal/components/ModalTitle';

export type DrawerHeaderProps = ModalHeaderProps & {
  /**
   * Drawer's title
   */
  title: string;
  /**
   * Drawer's subtitle
   */
  subtitle?: string;
};

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({ title, subtitle, onClose }) => {
  return (
    <ModalHeader onClose={onClose} bottomBorder className="min-h-fit px-6">
      <ModalTitle>{title}</ModalTitle>
      {subtitle && <ModalSubTitle>{subtitle}</ModalSubTitle>}
    </ModalHeader>
  );
};
