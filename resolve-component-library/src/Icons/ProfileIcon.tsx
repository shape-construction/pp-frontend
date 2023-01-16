import React, { FC, ComponentProps } from 'react';

export const ProfileIcon: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M32 21.992v4.009H0v-3.995a19.97 19.97 0 0 1 16.005-8.005c6.539 0 12.347 3.139 15.995 7.991zM21.336 6c0 1.414-.562 2.771-1.562 3.771s-2.357 1.562-3.771 1.562-2.771-.562-3.771-1.562S10.669 7.414 10.669 6s.562-2.771 1.562-3.771S14.588.667 16.003.667s2.771.562 3.771 1.562S21.336 4.585 21.336 6z"
      fill="currentColor"
    />
  </svg>
);
