import React from 'react';
import { twMerge } from 'tailwind-merge';

export type ModalContentProps = React.HtmlHTMLAttributes<HTMLDivElement>;

export const ModalContent: React.FC<ModalContentProps> = ({ className, ...props }) => {
  const classes = twMerge('flex h-full grow flex-col overflow-auto px-6', className);

  return <div data-testid="modal-content" className={classes} {...props} />;
};
