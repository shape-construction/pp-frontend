import React from 'react';
import { Dialog } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

export interface ModalOverlayProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const ModalOverlay: React.FC<ModalOverlayProps> = ({ className, ...props }) => {
  const classes = twMerge('fixed inset-0 bg-black opacity-30', className);

  return <Dialog.Overlay {...props} className={classes} />;
};
