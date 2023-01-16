import React, { FC, ComponentProps } from 'react';

export interface DoubleCircleIconProps extends ComponentProps<'svg'> {
  selected?: boolean;
}

export const DoubleCircleIcon: FC<DoubleCircleIconProps> = ({ selected = false, ...props }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    {selected && <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" />}
    <circle cx="10" cy="10" r="5" fill="currentColor" />
  </svg>
);
