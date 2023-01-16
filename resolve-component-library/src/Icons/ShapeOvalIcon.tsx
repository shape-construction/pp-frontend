import React, { FC, ComponentProps } from 'react';

export const ShapeOvalIcon: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.3332 9.99996C17.3332 14.05 14.0499 17.3333 9.99984 17.3333C5.94975 17.3333 2.6665 14.05 2.6665 9.99996C2.6665 5.94987 5.94975 2.66663 9.99984 2.66663C14.0499 2.66663 17.3332 5.94987 17.3332 9.99996Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
