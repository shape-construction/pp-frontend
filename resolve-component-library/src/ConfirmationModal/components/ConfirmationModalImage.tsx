import { twMerge } from 'tailwind-merge';
import React, { ComponentProps } from 'react';

export type ConfirmationModalImageProps = ComponentProps<'div'>;

export const ConfirmationModalImage: React.FC<ConfirmationModalImageProps> = ({
  className,
  ...props
}) => {
  const classes = twMerge('flex-none flex-shrink-0', className);

  return <div className={classes} {...props} />;
};
