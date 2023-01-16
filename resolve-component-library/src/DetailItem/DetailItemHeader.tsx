import React from 'react';

export interface DetailItemHeaderProps {
  /**
   * The header text of the item
   */
  title?: React.ReactNode;
  /**
   * The icon to show
   */
  icon?: React.ReactNode;
}

export const DetailItemHeader: React.FC<DetailItemHeaderProps> = ({ icon, title }) => (
  <header className="flex items-center space-x-2">
    <div className="flex h-5 w-5 items-center justify-center">{icon}</div>
    <div className="text-md font-medium text-gray-900">{title}</div>
  </header>
);
