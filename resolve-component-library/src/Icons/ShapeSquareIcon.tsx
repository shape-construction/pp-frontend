import React, { FC, ComponentProps } from 'react';

export const ShapeSquareIcon: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="2.6665"
      y="2.66663"
      width="14.6667"
      height="14.6667"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
