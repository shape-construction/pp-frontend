import React from 'react';
import { Modal } from '../../Modal';
import { ModalHeaderProps } from '../../Modal/components/ModalHeader';

export type FullScreenModalHeaderProps = Omit<ModalHeaderProps, 'bottomBorder'>;

export const FullScreenModalHeader: React.FC<FullScreenModalHeaderProps> = (props) => {
  return (
    <Modal.Header bottomBorder {...props}>
      {props.children}
    </Modal.Header>
  );
};
