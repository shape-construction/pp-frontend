import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ModalFooterProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  /**
   * If the footer should render a top border line.
   */
  topBorder?: boolean;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  className,
  topBorder = false,
  ...props
}) => {
  const classes = twMerge(
    'flex w-full items-center justify-end space-x-2 px-5 pt-4 pb-6 sm:pb-4',
    topBorder && 'border-t border-gray-200',
    className
  );

  return <div data-testid="modal-footer" {...props} className={classes} />;
};
