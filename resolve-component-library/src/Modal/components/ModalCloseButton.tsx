import React from 'react';
import { XIcon } from '../../Icons/solid';
import { IconButton } from '../../Button';

export type ModalCloseButtonProps = {
  className?: string;
  onClose: () => void;
};

export const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({ onClose }) => {
  return <IconButton icon={XIcon} onClick={onClose} size="sm" color="secondary" variant="text" />;
};
