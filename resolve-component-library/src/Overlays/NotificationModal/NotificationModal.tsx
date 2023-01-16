import React from 'react';
import Button from '../../Button';
import { Modal, ModalProps } from '../Modal';

export interface NotificationModalProps extends ModalProps {
  actionText?: string;
  onClose: () => void;
}

export const NotificationModal: React.FC<NotificationModalProps> = ({
  actionText,
  onClose,
  ...modalProps
}) => {
  const Actions = actionText ? (
    <Modal.Actions>
      <Button
        color="primary"
        variant="outlined"
        size="md"
        aria-label={actionText}
        onClick={onClose}
        fullWidth
      >
        {actionText}
      </Button>
    </Modal.Actions>
  ) : null;

  return (
    <Modal onClose={onClose} alignCenter showCloseIcon={false} withDivider={false} {...modalProps}>
      {Actions}
    </Modal>
  );
};
