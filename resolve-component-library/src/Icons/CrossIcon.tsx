import React, { FC, ComponentProps } from 'react';

export const CrossIcon: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    width="6"
    height="6"
    viewBox="0 0 6 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 3L5 5M1 5L3 3L1 5ZM3 3L5 1L3 3ZM3 3L1 1L3 3Z"
      stroke="#9CA3AF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
