import React from 'react';
import { Modal } from '../../Modal';
import { ModalFooterProps } from '../../Modal/components/ModalFooter';

export type FullScreenFooterHeaderProps = Omit<ModalFooterProps, 'topBorder'>;

export const FullScreenModalFooter: React.FC<FullScreenFooterHeaderProps> = (props) => {
  return (
    <Modal.Footer topBorder {...props}>
      {props.children}
    </Modal.Footer>
  );
};
