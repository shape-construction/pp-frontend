import React, { FC } from 'react';
import Badge from '../../Badge';
import Stack from '../../Stack';
import type { Article } from '../types';
import { SHAPE, THEME } from '../../Badge/Badge.types';
import Skeleton from '../../Skeleton';

export const ListArticlesSkeleton: FC = () => (
  <div className="h-full p-6">
    <Stack direction="column" spacing="5" divider aria-label="articles-skeleton">
      <Skeleton className="h-7 w-full bg-gray-400" />
      <Stack.Item aria-label="article">
        <article className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-10 w-full" />
        </article>
      </Stack.Item>
      <Stack.Item aria-label="article">
        <article className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-10 w-full" />
        </article>
      </Stack.Item>
      <Stack.Item aria-label="article">
        <article className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-10 w-full" />
        </article>
      </Stack.Item>
    </Stack>
  </div>
);

export type ListArticlesProps = {
  articles: Article[];
  onSelect: (article: Article) => void;
};

export const ListArticles: FC<ListArticlesProps> = ({ articles, onSelect }) => (
  <Stack direction="column" spacing="5" divider aria-label="articles">
    {articles.map((article) => (
      <button
        key={article.id}
        aria-label="article"
        onClick={() => onSelect(article)}
        type="button"
        className="w-full text-left"
      >
        <Stack.Item aria-label="article">
          <article className="space-y-2">
            <div className="flex gap-4">
              <h4 className="text-sm font-medium leading-5 text-gray-900">{article.title}</h4>
              {article.draft && (
                <Badge
                  aria-label="draft_badge"
                  label="Draft"
                  shape={SHAPE.BASIC}
                  theme={THEME.YELLOW}
                />
              )}
            </div>
            <p
              className="prose prose-sm line-clamp-2"
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
          </article>
        </Stack.Item>
      </button>
    ))}
  </Stack>
);
