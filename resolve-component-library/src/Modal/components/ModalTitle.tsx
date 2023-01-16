import React from 'react';
import { Dialog } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

export type ModalTitleProps = React.ComponentPropsWithRef<typeof Dialog.Title> & {
  className?: string;
};

export const ModalTitle: React.FC<ModalTitleProps> = ({ className, ...props }) => (
  <Dialog.Title
    className={twMerge('text-lg font-medium leading-7 text-gray-900', className)}
    {...props}
  />
);

export type ModalSubTitleProps = React.ComponentPropsWithRef<typeof Dialog.Title> & {
  className?: string;
};

export const ModalSubTitle: React.FC<ModalSubTitleProps> = ({ className, ...props }) => {
  const classes = twMerge('text-sm font-normal leading-5 text-gray-500', className);

  return <Dialog.Title className={classes} {...props} />;
};
