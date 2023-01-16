import React, { FC, ComponentProps } from 'react';

export const ArrowsMoveIcon: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.37415 11.8751L2.49902 10M2.49902 10L4.37415 8.12487M2.49902 10L7.18685 10M11.8747 4.37461L9.99954 2.49948M9.99954 2.49948L8.12441 4.37461M9.99954 2.49948L9.99954 7.18731M8.12441 15.6254L9.99954 17.5005M9.99954 17.5005L11.8747 15.6254M9.99954 17.5005L9.99954 12.8127M17.5001 10L12.8122 10M17.5001 10L15.6249 8.12487M17.5001 10L15.6249 11.8751"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
