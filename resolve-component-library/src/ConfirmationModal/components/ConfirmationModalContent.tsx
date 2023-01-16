import { Modal } from '../../Modal';
import { ModalContentProps } from '../../Modal/components/ModalContent';
import React from 'react';
import classNames from 'classnames';

export interface ConfirmationModalContentProps extends ModalContentProps {
  centered?: boolean;
}

export const ConfirmationModalContent: React.FC<ConfirmationModalContentProps> = ({
  className,
  centered,
  ...props
}) => {
  const classes = classNames(
    {
      'text-center items-center': centered,
    },
    className
  );

  return (
    <Modal.Content {...props} className={classes}>
      {props.children}
    </Modal.Content>
  );
};
