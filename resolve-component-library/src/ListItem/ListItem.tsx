import React, { FC } from 'react';
import Highlighter from 'react-highlight-words';
import { ChevronRightIcon } from '../Icons/solid';

export interface ListItemProps {
  /**
   * The title to be shown in the list item
   */
  title: string;

  /**
   * Click mouse event callback
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /**
   * If passed, matching strings will be highlighted
   */
  highlightWord?: string;
}

export const ListItem: FC<ListItemProps> = ({ title, onClick, highlightWord = '' }) => {
  return (
    <button type="button" onClick={onClick} className="flex w-full justify-between py-2">
      <span className="text-base font-normal text-gray-500">
        <Highlighter
          highlightClassName="font-bold bg-gray-300"
          searchWords={[highlightWord]}
          textToHighlight={title}
        />
      </span>
      <ChevronRightIcon className="h-6 w-6" />
    </button>
  );
};

export default ListItem;
