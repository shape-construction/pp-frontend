import React from 'react';

export interface StackedListHeaderProps {
  /**
   * The title to be rendered in the header
   */
  title: string;
}

export const StackedListHeader: React.FC<StackedListHeaderProps> = ({
  title,
}: StackedListHeaderProps) => (
  <div className="px-4 py-5 sm:px-6">
    <h2 className="text-lg leading-6 font-medium text-gray-900">{title}</h2>
  </div>
);
