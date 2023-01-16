import React, { FC } from 'react';
import { ArrowLeftIcon } from '../../Icons/solid';
import type { Article } from '../types';
import Badge from '../../Badge';
import { SHAPE, THEME } from '../../Badge/Badge.types';
import { IconButton } from '../../Button';

export type ArticleDetailsProps = {
  article: Article;
  onNavigateBack: () => void;
};

export const ArticleDetails: FC<ArticleDetailsProps> = ({ article, onNavigateBack }) => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex flex-row items-center gap-4 ">
        <IconButton
          variant="text"
          color="secondary"
          icon={ArrowLeftIcon}
          onClick={onNavigateBack}
          size="md"
          aria-label="help article back"
        />
        <div className="flex gap-4">
          <h4 className="text-base font-medium leading-6 text-gray-900">{article.title}</h4>
          {article.draft && (
            <Badge
              aria-label="draft_badge"
              label="Draft"
              shape={SHAPE.BASIC}
              theme={THEME.YELLOW}
            />
          )}
        </div>
      </div>
      <p className="prose prose-sm" dangerouslySetInnerHTML={{ __html: article.body }} />
    </div>
  );
};
