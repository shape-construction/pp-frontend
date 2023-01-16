import React from 'react';
import { Drawer, DrawerProps } from '../Drawer';
import { breakpoints, useMediaQuery } from '../hooks';
import { ExternalLinkIcon, MailIcon } from '../Icons/outline';
import { Article, Section } from './types';
import { ArticleDetails } from './components/ArticleDetails';
import { ListArticlesContainer } from './components/ListArticlesContainer';
import { ListSections, ListSectionsSkeleton } from './components/ListSections';
import Link from '../Link';

export type HelpCenterProps = Pick<DrawerProps, 'open' | 'onClose'> & {
  articles: Article[];
  sections: Section[];
  helpCenterUrl: string;
  helpCenterEmail: string;
  selectedArticle: Article | undefined;
  selectedSection: Section | undefined;
  onSelectArticle: (article: Article | undefined) => void;
  isLoading?: boolean;
};

export const HelpCenter: React.FC<HelpCenterProps> = ({
  articles,
  sections,

  selectedSection,
  selectedArticle,
  onSelectArticle,

  helpCenterUrl,
  helpCenterEmail,

  isLoading = false,
  ...drawerProps
}) => {
  const isLargeScreen = useMediaQuery(breakpoints.up('md'));

  return (
    <Drawer
      fullWidth
      fullScreen={!isLargeScreen}
      maxWidth={isLargeScreen ? 'md' : 'none'}
      placement="right"
      {...drawerProps}
    >
      <Drawer.Header title="Help & tips" onClose={drawerProps.onClose} />
      <Drawer.Content>
        {selectedArticle ? (
          <div data-testid="article section">
            <ArticleDetails
              onNavigateBack={() => onSelectArticle(undefined)}
              article={selectedArticle}
            />
          </div>
        ) : (
          <>
            <ListArticlesContainer
              isLoading={isLoading}
              articles={articles}
              helpCenterUrl={helpCenterUrl}
              helpCenterEmail={helpCenterEmail}
              selectedSection={selectedSection}
              onSelectArticle={onSelectArticle}
            />
            {isLoading ? (
              <ListSectionsSkeleton />
            ) : (
              <ListSections title="Learn more about Shape" sections={sections} />
            )}
          </>
        )}
      </Drawer.Content>
      <Drawer.Footer>
        <div className="flex gap-x-6 text-sm font-medium leading-5">
          <Link
            href={`mailto:${helpCenterEmail}`}
            target="_blank"
            rel="noreferrer"
            color="primary"
            leadingIcon={MailIcon}
          >
            Contact support
          </Link>
          <Link
            href={helpCenterUrl}
            target="_blank"
            rel="noreferrer"
            color="primary"
            leadingIcon={ExternalLinkIcon}
          >
            Go to help center
          </Link>
        </div>
      </Drawer.Footer>
    </Drawer>
  );
};
