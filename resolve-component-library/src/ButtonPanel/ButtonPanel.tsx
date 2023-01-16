import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonPanelProps = ComponentProps<'button'>;

export const ButtonPanel: React.FC<ButtonPanelProps> = ({ className, ...props }) => (
  <button
    type="button"
    className={twMerge('w-full text-left', props.disabled && 'select-text', className)}
    {...props}
  />
);
