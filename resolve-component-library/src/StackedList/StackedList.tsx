import React from 'react';

export interface StackedListProps {
  /**
   * React component to render inside Stacked List Item
   */
  children: React.ReactNode;
}

export const StackedList: React.FC<StackedListProps> = ({ children }: StackedListProps) => (
  <div className="bg-white shadow rounded-md max-w-5xl">
    <ul className="divide-y divide-gray-200">{children}</ul>
  </div>
);
