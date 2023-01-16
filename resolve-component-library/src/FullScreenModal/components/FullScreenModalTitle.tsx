import { Modal } from '../../Modal';
import { ModalTitleProps } from '../../Modal/components/ModalTitle';
import React from 'react';

export const FullScreenModalTitle: React.FC<ModalTitleProps> = (props) => (
  <Modal.Title {...props}>{props.children}</Modal.Title>
);
