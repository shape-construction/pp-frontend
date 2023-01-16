import { FormikConfig, FormikValues } from 'formik';
import React from 'react';
import { breakpoints, useMediaQuery } from '../hooks';
import { Modal, ModalProps } from '../Modal/Modal';

import OverlayForm from './OverlayForm';

export interface OverlayWithFormProps extends Omit<ModalProps, 'onClose'> {
  /**
   * Instructs the upper state to update open prop to false
   */
  closeOverlay: () => void;
  /**
   * Custom footer that replaces the default if passed
   */
  footer?: React.ReactNode;
  /**
   * Props to be passed down to OverlayForm
   */
  formProps: FormikConfig<FormikValues>;
  /**
   * Whether the content should be padded or not
   */
  noPadding?: boolean;
  /**
   * Whether the close button should appear
   */
  showCloseIcon?: boolean;
  /**
   * InnerText of paragraph below the title
   */
  subTitle?: string;
  /**
   * InnerText of h2 at the top of the Overlay
   */
  title: string;
}

export const OverlayWithForm: React.FC<OverlayWithFormProps> = ({
  children,
  footer,
  closeOverlay,
  formProps,
  noPadding,
  showCloseIcon = true,
  subTitle,
  title,
  ...props
}) => {
  const isLargeScreen = useMediaQuery(breakpoints.up('md'));

  return (
    <Modal
      {...props}
      fullScreen={!isLargeScreen}
      fullWidth
      maxWidth={isLargeScreen ? 'lg' : 'none'}
      onClose={closeOverlay}
      roundBorders={isLargeScreen}
    >
      <Modal.Header bottomBorder onClose={showCloseIcon ? closeOverlay : undefined}>
        {title && <Modal.Title>{title}</Modal.Title>}
        {subTitle && <Modal.SubTitle>{subTitle}</Modal.SubTitle>}
      </Modal.Header>
      <Modal.Content className="px-0">
        <OverlayForm
          {...formProps}
          noPadding={noPadding}
          closeOverlay={closeOverlay}
          formClassNames="bg-white"
          footer={footer}
        >
          {children}
        </OverlayForm>
      </Modal.Content>
    </Modal>
  );
};
