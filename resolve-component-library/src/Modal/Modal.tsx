import React, { ComponentProps, Fragment, useEffect } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { Dialog, Transition } from '@headlessui/react';

import { ModalHeader } from './components/ModalHeader';
import { ModalTitle, ModalSubTitle } from './components/ModalTitle';
import { ModalContent } from './components/ModalContent';
import { ModalFooter } from './components/ModalFooter';
import { transitions, Transition as TransitionType } from './config/transitions';

import { ModalOverlay } from './components/ModalOverlay';
import { ModalCloseButton } from './components/ModalCloseButton';

export type MaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none';

const maxWithOptions = {
  'xs': 'max-w-xs',
  'sm': 'max-w-sm',
  'md': 'max-w-md',
  'lg': 'max-w-lg',
  'xl': 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  'none': 'max-w-none',
} as { [key in MaxWidth]: string };

type Components = {
  CloseButton: typeof ModalCloseButton;
  Header: typeof ModalHeader;
  Title: typeof ModalTitle;
  SubTitle: typeof ModalSubTitle;
  Content: typeof ModalContent;
  Footer: typeof ModalFooter;
  Overlay: typeof ModalOverlay;
};

const getMaxWidth = (maxWidth: MaxWidth) => maxWithOptions[maxWidth];
const clearHtmlStyle = () => {
  const element = document.querySelector('html');
  if (element && element.getAttribute('style')) element.removeAttribute('style');
};

export type ModalProps = ComponentProps<'div'> & {
  children: React.ReactNode;
  /**
   * Whether the Dialog is open or not.
   */
  open: boolean;
  /**
   * If true, will not trigger onClose.
   */
  disableEscapeKey?: boolean;
  /**
   * Called when the Dialog is dismissed (via the overlay or Escape key). Typically used to close the dialog by setting open to false.
   */
  onClose: (value?: boolean) => void;
  /**
   * A ref to an element that should receive focus first.
   */
  initialFocus?: React.MutableRefObject<HTMLElement | null>;
  /**
   * Set modal fullscreen
   */
  fullScreen?: boolean;
  /**
   * Set modal full width
   */
  fullWidth?: boolean;
  /**
   * Determine the max-width of the dialog.
   */
  maxWidth?: MaxWidth;
  /**
   * Adds an outside pad around the modal. Useful when used, for example, with fullScreen set to true.
   */
  outsidePad?: boolean;
  /**
   * Adds rounded borders. Usually used when not in fullscreen and without outsidePad
   */
  roundBorders?: boolean;
  /**
   * Type of transitions to be applied to the modal. When auto, it will apply slide-bottom when small screen and fade for larger screens
   */
  transition?: TransitionType;
};

export const Modal: React.FC<ModalProps> & Components = ({
  children,
  className,
  disableEscapeKey,
  fullScreen,
  fullWidth,
  maxWidth,
  outsidePad,
  roundBorders,
  transition = 'none',
  ...modalProps
}) => {
  const handleClose: ModalProps['onClose'] = (open) => {
    // When open is false, it means key down has been pressed
    if (open === false && disableEscapeKey) return;

    modalProps.onClose(open);
  };

  const hasOverlay = !fullScreen || outsidePad;

  /**
   * Fixes the bug related to the consecutive modals
   * https://github.com/tailwindlabs/headlessui/issues/1199
   * https://github.com/tailwindlabs/headlessui/issues/1000
   */
  useEffect(
    () => () => {
      setTimeout(clearHtmlStyle, 0);
    },
    []
  );

  return (
    <Transition as={Fragment} show={modalProps.open}>
      <Dialog {...modalProps} onClose={handleClose} as="div">
        <div className="fixed inset-0 z-modal flex items-center justify-center">
          {hasOverlay && <ModalOverlay />}
          <Transition.Child
            as="div"
            className={twMerge(
              classNames(
                'flex flex-col',
                {
                  'w-full': fullWidth,
                  'h-full w-full': fullScreen,
                },
                maxWidth && getMaxWidth(maxWidth),
                className
              )
            )}
            {...transitions[transition]}
          >
            <div
              className={classNames('flex grow transform flex-col overflow-hidden bg-white', {
                'm-8 shadow-xl': outsidePad,
                'rounded-lg': roundBorders,
              })}
            >
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

Modal.CloseButton = ModalCloseButton;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.SubTitle = ModalSubTitle;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
Modal.Overlay = ModalOverlay;
