import { Modal } from '../../Modal';
import { ModalContentProps } from '../../Modal/components/ModalContent';
import React from 'react';

export const FullScreenModalContent: React.FC<ModalContentProps> = (props) => (
  <Modal.Content {...props}>{props.children}</Modal.Content>
);
