import React from 'react';
import { HelpCenterProps } from '../HelpCenter';
import { ListArticles, ListArticlesSkeleton } from './ListArticles';
import EmptyListArticles from './EmptyListArticles';
import Divider from '../../Divider';

type ListArticlesContainerProps = Omit<
  HelpCenterProps,
  'sections' | 'selectedArticle' | 'open' | 'onClose'
>;

export const ListArticlesContainer: React.FC<ListArticlesContainerProps> = ({
  isLoading,
  selectedSection,
  helpCenterEmail,
  helpCenterUrl,
  articles,
  onSelectArticle,
}) => {
  const noArticles = articles.length === 0;

  return (
    <div data-testid="list article section" className="h-full overflow-y-auto">
      {isLoading && <ListArticlesSkeleton />}
      {!isLoading && (
        <div className="flex h-full flex-col gap-y-6 p-6">
          {noArticles ? (
            <EmptyListArticles helpCenterEmail={helpCenterEmail} helpCenterUrl={helpCenterUrl} />
          ) : (
            <>
              <h4 className="text-base font-medium leading-6 text-gray-900">{`Need some help with ${selectedSection?.name} ?`}</h4>
              <Divider direction="column" />
              <ListArticles articles={articles} onSelect={onSelectArticle} />
            </>
          )}
        </div>
      )}
    </div>
  );
};
