import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListArticles, ListArticlesProps } from './ListArticles';
import userEvent from '@testing-library/user-event';

describe('ListArticles', () => {
  it('renders a list of articles', () => {
    const articles: ListArticlesProps['articles'] = Array.from({ length: 10 }, (_, index) => ({
      id: index,
      title: `Article name ${index}`,
      body: `This is the article body ${index}`,
      draft: false,
    }));

    render(<ListArticles articles={articles} onSelect={jest.fn} />);

    expect(screen.getByRole('list', { name: 'articles' })).toBeInTheDocument();
    expect(screen.getAllByRole('listitem', { name: 'article' })).toHaveLength(10);
  });

  it('renders the article information', () => {
    const articles: ListArticlesProps['articles'] = [
      {
        id: 0,
        title: 'Article name',
        body: 'This is the article body',
        draft: false,
      },
    ];

    render(<ListArticles articles={articles} onSelect={jest.fn} />);

    expect(screen.getByRole('heading', { name: 'Article name' })).toBeInTheDocument();
    expect(screen.getByText('This is the article body')).toBeInTheDocument();
  });

  it('executes onSelect when clicking on article', () => {
    const articles: ListArticlesProps['articles'] = [
      {
        id: 0,
        title: 'Article name',
        body: 'This is the article body',
        draft: false,
      },
    ];
    const spyOnSelect = jest.fn();
    render(<ListArticles articles={articles} onSelect={spyOnSelect} />);

    const [firstArticle] = screen.getAllByRole('button', { name: 'article' });
    userEvent.click(firstArticle);

    expect(spyOnSelect).toHaveBeenCalledWith(articles[0]);
  });

  describe('when an article is in draft state', () => {
    it('should render a badge on article item list', () => {
      const articles: ListArticlesProps['articles'] = [
        {
          id: 0,
          title: 'Article name',
          body: 'This is the article body',
          draft: true,
        },
      ];

      render(<ListArticles articles={articles} onSelect={jest.fn} />);

      expect(screen.getByText('Draft')).toBeInTheDocument();
    });
  });
});
