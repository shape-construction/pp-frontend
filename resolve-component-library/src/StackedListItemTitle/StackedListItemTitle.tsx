import React from 'react';

export interface StackedListItemTitleProps {
  /**
   * The primary text of the list item title
   */
  title: string;
  /**
   * The secondary text of the list item title
   */
  description: string;
}

export const StackedListItemTitle: React.FC<StackedListItemTitleProps> = ({
  title,
  description,
}: StackedListItemTitleProps) => (
  <div>
    <p className="mt-2 flex items-center text-sm text-gray-500">{title}</p>
    <p className="text-sm truncate">{description}</p>
  </div>
);
