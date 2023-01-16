import { FullScreenModalHeader } from './components/FullScreenModalHeader';
import { FullScreenModalTitle } from './components/FullScreenModalTitle';
import { FullScreenModalFooter } from './components/FullScreenModalFooter';
import { FullScreenModalContent } from './components/FullScreenModalContent';
import React from 'react';
import { useMediaQuery, breakpoints } from '../hooks';
import { Modal, ModalProps } from '../Modal/Modal';
import { Transition } from '../Modal/config/transitions';

type Components = {
  Header: typeof Modal.Header;
  Title: typeof Modal.Title;
  Content: typeof Modal.Content;
  Footer: typeof Modal.Footer;
};

export type FullScreenModalProps = Pick<ModalProps, 'open' | 'onClose' | 'initialFocus'>;

export const FullScreenModal: React.FC<FullScreenModalProps> & Components = ({
  onClose,
  open,
  children,
  ...props
}) => {
  const isSmallScreen = useMediaQuery(breakpoints.down('md'));
  const fullScreenMode = true;
  const isPadded = !isSmallScreen;
  const hasRoundBorders = !isSmallScreen;
  const transition: Transition = isSmallScreen ? 'bottom-to-top' : 'fade';

  return (
    <Modal
      {...props}
      onClose={onClose}
      open={open}
      fullScreen={fullScreenMode}
      outsidePad={isPadded}
      roundBorders={hasRoundBorders}
      transition={transition}
    >
      {children}
    </Modal>
  );
};

FullScreenModal.Header = FullScreenModalHeader;
FullScreenModal.Title = FullScreenModalTitle;
FullScreenModal.Content = FullScreenModalContent;
FullScreenModal.Footer = FullScreenModalFooter;
