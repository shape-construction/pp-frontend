import React from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { XIcon } from '../../Icons/outline';

const CloseIcon: React.VFC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ onClick }) => (
  <button
    type="button"
    className="absolute right-5 top-5 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    onClick={onClick}
    aria-label="Close Overlay"
  >
    <XIcon className="h-6 w-6" aria-hidden="true" />
  </button>
);

export interface ModalHeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  /**
   * If the header should render a bottom border line.
   */
  bottomBorder?: boolean;
  /**
   * Callback called when clicked on the close icon button. This prop manage if renders or not the close icon component.
   */
  onClose?: () => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  bottomBorder = false,
  className,
  children,
  onClose,
  ...props
}) => {
  const classes = twMerge(
    classNames(
      'relative w-full flex flex-col py-5 px-4 min-h-[4rem] gap-2',
      {
        'pr-16': onClose,
        'border-b border-gray-200': bottomBorder,
      },
      className
    )
  );

  return (
    <div data-testid="modal-header" className={classes} {...props}>
      {children}
      {onClose && <CloseIcon onClick={onClose} />}
    </div>
  );
};
