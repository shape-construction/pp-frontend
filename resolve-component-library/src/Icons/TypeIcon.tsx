import React, { FC, ComponentProps } from 'react';

export const TypeIcon: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.7085 15.1921L6.61475 4.77539L10.521 15.1921M9.15381 11.5462H4.07568"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6875 9.7556C13.0684 8.90552 13.9688 8.33337 15 8.33337C16.4375 8.33337 17.5 9.28152 17.5 10.7037V14.9704M12.5 13.2815C12.5 14.3482 13.3394 15 14.375 15C16.0625 15 17.5 14.2 17.5 11.8593V11.4149C16.875 11.4149 15.6875 11.4445 14.625 11.563C13.6009 11.6774 12.5 12.126 12.5 13.2815Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
