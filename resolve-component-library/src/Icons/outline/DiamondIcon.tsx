import React, { FC, ComponentProps } from 'react';

export const DiamondIcon: FC<ComponentProps<'svg'>> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m6 5h12l3 5-8.5 9.5c-0.0652 0.0665-0.143 0.1194-0.2288 0.1554-0.0859 0.0361-0.1781 0.0547-0.2712 0.0547s-0.1853-0.0186-0.2712-0.0547c-0.0858-0.036-0.1636-0.0889-0.2288-0.1554l-8.5-9.5 3-5z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="m10 12-2-2.2 0.6-1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
