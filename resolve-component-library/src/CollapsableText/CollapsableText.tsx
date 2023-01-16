import React, { MouseEventHandler, useMemo, useState } from 'react';
import classNames from 'classnames';

export interface CollapsableTextProps {
  /**
   * text to be displayed
   */
  content: string;
  /**
   * Click mouse event callback
   */
  onClick?: MouseEventHandler;
  /**
   * defines the title of this component
   */
  title?: string;
  /**
   * number of words that determine when text is being splitted
   */
  maxWordsCount?: number;
}

export const CollapsableText: React.FC<CollapsableTextProps> = ({
  content,
  onClick,
  title,
  maxWordsCount = 20,
}) => {
  const [showFullContent, setShowFullContent] = useState<boolean>(false);
  function toggleShowFullContent() {
    setShowFullContent(!showFullContent);
  }

  const contentToArray = useMemo(() => content.split(' '), [content]);

  const reducedContent = useMemo(() => {
    if (contentToArray.length <= maxWordsCount) {
      return content;
    }

    return contentToArray.slice(0, maxWordsCount).join(' ');
  }, [content, maxWordsCount]);

  const hasMoreContent = content.length > reducedContent.length;

  const isActionable = !!onClick && (showFullContent || !hasMoreContent);

  const contentClassnames = classNames({
    'hover:bg-gray-100 cursor-pointer': isActionable,
  });

  return (
    <article className="text-sm leading-5">
      {title && <h4 className="text-base leading-6 font-medium mb-2">{title}</h4>}
      <p
        className={contentClassnames}
        onClick={isActionable ? onClick : undefined}
        role="presentation"
      >
        {showFullContent ? content : reducedContent}
        {!showFullContent && hasMoreContent && <>&hellip;</>}
      </p>

      {hasMoreContent && (
        <button
          className="font-medium text-indigo-500 hover:text-indigo-400 mt-2"
          type="button"
          onClick={toggleShowFullContent}
        >
          {showFullContent ? <>See less</> : <>See more</>}
        </button>
      )}
    </article>
  );
};
