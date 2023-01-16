import React from 'react';
import classNames from 'classnames';
import { Modal } from '../../Modal';

export type ConfirmationModalTitleProps = React.ComponentProps<typeof Modal.Title>;

export const ConfirmationModalTitle: React.FC<ConfirmationModalTitleProps> = ({
  className,
  ...props
}) => {
  const classes = classNames('text-lg leading-6 font-medium', className);

  return <Modal.Title className={classes} {...props} />;
};
