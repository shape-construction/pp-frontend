import React from 'react';

export const Spinner: React.FC<{}> = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="animate-spin"
  >
    <path
      opacity="0.25"
      d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
      stroke="#6366F1"
    />
    <path
      opacity="0.75"
      d="M12 4C16.4183 4 20 7.58172 20 12C20 14.2713 19.0535 16.3216 17.5333 17.7778"
      stroke="#6366F1"
    />
  </svg>
);
