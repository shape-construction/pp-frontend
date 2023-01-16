import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelpCenter, HelpCenterProps } from './HelpCenter';
import userEvent from '@testing-library/user-event';

const defaultProps: HelpCenterProps = {
  open: true,
  onClose: jest.fn(),
  onSelectArticle: jest.fn(),
  selectedArticle: undefined,
  selectedSection: undefined,
  articles: [],
  sections: [],
  helpCenterEmail: '',
  helpCenterUrl: '',
};

describe('HelpCenter', () => {
  it('renders the list of articles by default', () => {
    const articles: HelpCenterProps['articles'] = Array.from({ length: 1 }, (_, index) => ({
      id: index,
      title: 'Article title',
      body: 'Article body',
      draft: false,
    }));

    render(<HelpCenter {...defaultProps} articles={articles} />);

    expect(screen.getByTestId('list article section')).toBeInTheDocument();
  });

  it('renders the articles list with title', () => {
    const articles: HelpCenterProps['articles'] = Array.from({ length: 10 }, (_, index) => ({
      id: index,
      title: `Article title ${index}`,
      body: `Article body ${index}`,
      draft: false,
    }));
    const section: HelpCenterProps['sections'][number] = {
      id: 0,
      name: `Section title`,
      html_url: '#',
    };

    render(<HelpCenter {...defaultProps} articles={articles} selectedSection={section} />);

    expect(
      screen.getByRole('heading', { name: 'Need some help with Section title ?' })
    ).toBeInTheDocument();
    expect(screen.getAllByRole('listitem', { name: 'article' })).toHaveLength(10);
  });

  it('renders the sections list', () => {
    const sections: HelpCenterProps['sections'] = Array.from({ length: 10 }, (_, index) => ({
      id: index,
      name: `Section title ${index}`,
      html_url: '#',
    }));

    render(<HelpCenter {...defaultProps} sections={sections} />);

    expect(screen.getAllByRole('listitem', { name: 'section' })).toHaveLength(10);
  });

  it('renders the footer actions', () => {
    render(<HelpCenter {...defaultProps} />);

    expect(screen.getByRole('link', { name: 'Contact support' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to help center' })).toBeInTheDocument();
  });

  it('renders the article section when have a selected article', () => {
    const articles: HelpCenterProps['articles'] = Array.from({ length: 1 }, (_, index) => ({
      id: index,
      title: `Article title ${index}`,
      body: `Article body ${index}`,
      draft: false,
    }));
    const selectedArticle: HelpCenterProps['selectedArticle'] = articles[0];

    render(<HelpCenter {...defaultProps} selectedArticle={selectedArticle} articles={articles} />);

    expect(screen.getByTestId('article section')).toBeInTheDocument();
  });

  it('executes onSelectArticle when selecting an article', async () => {
    const articles: HelpCenterProps['articles'] = Array.from({ length: 10 }, (_, index) => ({
      id: index,
      title: `Article title ${index}`,
      body: `Article body ${index}`,
      draft: false,
    }));
    const section: HelpCenterProps['sections'][number] = {
      id: 0,
      name: `Section title`,
      html_url: '#',
    };
    const spyOnSelect = jest.fn();
    render(
      <HelpCenter
        {...defaultProps}
        articles={articles}
        selectedSection={section}
        onSelectArticle={spyOnSelect}
      />
    );

    const [firstArticle] = screen.getAllByRole('button', { name: 'article' });
    userEvent.click(firstArticle);

    expect(spyOnSelect).toHaveBeenCalledWith(articles[0]);
  });

  it('renders a loading state when isLoading is true', () => {
    const articles: HelpCenterProps['articles'] = Array.from({ length: 1 }, (_, index) => ({
      id: index,
      title: 'Article title',
      body: 'Article body',
      draft: false,
    }));

    render(<HelpCenter {...defaultProps} articles={articles} isLoading={true} />);

    expect(screen.getByLabelText('articles-skeleton')).toBeInTheDocument();
    expect(screen.getByLabelText('sections-skeleton')).toBeInTheDocument();
  });

  it('renders an empty state when there are no articles available', () => {
    const section: HelpCenterProps['sections'][number] = {
      id: 0,
      name: `Section title`,
      html_url: '#',
    };

    render(<HelpCenter {...defaultProps} articles={[]} selectedSection={section} />);

    expect(screen.getByTestId('empty-list-articles')).toBeInTheDocument();
  });
});
