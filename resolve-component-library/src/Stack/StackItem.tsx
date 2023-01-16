import React, { ComponentProps } from 'react';

export type StackItemProps = ComponentProps<'div'>;

export const StackItem: React.FC<StackItemProps> = ({ children, ...props }) => (
  <div role="listitem" {...props}>
    {children}
  </div>
);
