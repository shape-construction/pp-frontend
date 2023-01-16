import React from 'react';

export interface StepsProps {
  /**
   * The steps should be passed here
   */
  children: React.ReactNode;
}

export const Steps: React.FC<StepsProps> = ({ children }) => (
  <nav className="flex items-center justify-center" aria-label="Progress">
    <ol className="flex items-center space-x-5">{children}</ol>
  </nav>
);
