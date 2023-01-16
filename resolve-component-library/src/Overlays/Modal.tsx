import React, { PropsWithChildren, ReactElement, useRef } from 'react';
import { Dialog } from '@headlessui/react';
import { XIcon } from '../Icons/outline';
import classNames from 'classnames';

if (process.env.NODE_ENV === 'development') {
  console.info(`
  This component will be deprecated soon. Please use the following one instead:

  import { Modal } from '@shape-construction/resolve-component-library'
`);
}

export interface ModalProps {
  /**
   * Wheter text-align: center should be applied to body
   * @default false
   */
  alignCenter?: boolean;
  children?: ReactElement | null;
  isOpen: boolean;
  noPadding?: boolean;
  onClose: () => void;
  /**
   * Content to be rendered before the title
   */
  preTitleContent?: ReactElement;
  showCloseIcon?: boolean;
  subTitle?: string;
  title?: string;
  /**
   * If a divider should be rendered between header and content
   * @default true
   */
  withDivider?: boolean;
}

export const Modal = ({
  alignCenter = false,
  children,
  isOpen,
  noPadding = false,
  onClose,
  preTitleContent,
  showCloseIcon = true,
  subTitle,
  title,
  withDivider = true,
}: PropsWithChildren<ModalProps>) => {
  const closeButtonRef = useRef(null);

  return (
    <Dialog
      className="fixed inset-0 z-modal overflow-y-auto"
      onClose={onClose}
      initialFocus={closeButtonRef}
      open={isOpen}
    >
      <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center">
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <section
          className={classNames(
            'flex transform flex-col-reverse overflow-hidden  rounded-lg bg-white shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg',
            {
              'text-center': alignCenter,
              'text-left': !alignCenter,
            }
          )}
        >
          <div className={classNames('max-h-80vh overflow-y-auto', { 'px-4 pb-4': !noPadding })}>
            {children}
          </div>
          <header
            className={classNames('p-4', {
              'grid grid-cols-span-first gap-x-3 gap-y-1': showCloseIcon,
              'border-b': !!children && (title || subTitle) && withDivider,
            })}
          >
            {preTitleContent && <div className="mb-2 flex justify-center">{preTitleContent}</div>}
            {title && (
              <Dialog.Title className="mb-2 text-lg font-medium text-gray-900">
                {title}
              </Dialog.Title>
            )}
            {title && subTitle && (
              <Dialog.Description className="row-start-2 text-sm text-gray-500">
                {subTitle}
              </Dialog.Description>
            )}
            {showCloseIcon && (
              <button
                aria-label="Close Overlay"
                className="col-start-2 flex items-center rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={onClose}
                ref={closeButtonRef}
                type="button"
              >
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            )}
          </header>
        </section>
      </div>
    </Dialog>
  );
};

type ActionsProps = {
  children: ReactElement | ReactElement[];
};
const Actions: React.FC<ActionsProps> = ({ children }) => (
  <div
    role="list"
    aria-label="actions"
    className="mt-6 flex flex-col-reverse space-y-3 space-y-reverse md:flex-row md:space-y-0 md:space-x-3"
  >
    {children}
  </div>
);
Modal.Actions = Actions;
