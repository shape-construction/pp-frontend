import classnames from 'classnames';
import React from 'react';

export type CharacterCountProps = {
  /**
   * sentence to display length of
   */
  sentence: string;
  /**
   * maximum number of characters
   */
  maximum: number;
  /**
   * label to display after the fractional expression
   */
  label: string;
};

export const CharacterCount: React.FC<CharacterCountProps> = ({ sentence, maximum, label }) => {
  return (
    <span
      className={classnames('font-normal text-gray-500', {
        'text-gray-500': sentence.length <= maximum,
        'text-red-500': sentence.length > maximum,
      })}
    >{`${sentence.length}/${maximum} ${label}`}</span>
  );
};
