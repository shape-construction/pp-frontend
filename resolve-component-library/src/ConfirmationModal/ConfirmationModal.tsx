import React from 'react';
import classNames from 'classnames';
import { Modal, ModalProps } from '../Modal/Modal';
import { ConfirmationModalHeader } from './components/ConfirmationModalHeader';
import { ConfirmationModalTitle } from './components/ConfirmationModalTitle';
import { ConfirmationModalImage } from './components/ConfirmationModalImage';
import { ConfirmationModalContent } from './components/ConfirmationModalContent';
import { ConfirmationModalFooter } from './components/ConfirmationModalFooter';

type Components = Pick<typeof Modal, 'SubTitle'> & {
  Header: typeof ConfirmationModalHeader;
  Title: typeof ConfirmationModalTitle;
  Image: typeof ConfirmationModalImage;
  Content: typeof ConfirmationModalContent;
  Footer: typeof ConfirmationModalFooter;
};

export type ConfirmationModalProps = Pick<
  ModalProps,
  'className' | 'initialFocus' | 'open' | 'onClose'
>;

export const ConfirmationModalRoot: React.FC<ConfirmationModalProps> = ({
  children,
  className,
  ...props
}) => (
  <Modal maxWidth="md" roundBorders className={classNames('p-4', className)} {...props}>
    {children}
  </Modal>
);

export const ConfirmationModal: typeof ConfirmationModalRoot & Components = Object.assign(
  ConfirmationModalRoot,
  Modal,
  {
    Header: ConfirmationModalHeader,
    Title: ConfirmationModalTitle,
    Image: ConfirmationModalImage,
    Content: ConfirmationModalContent,
    Footer: ConfirmationModalFooter,
  }
);
