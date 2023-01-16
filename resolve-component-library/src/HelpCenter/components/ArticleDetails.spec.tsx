import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ArticleDetails, ArticleDetailsProps } from './ArticleDetails';

const article: ArticleDetailsProps['article'] = {
  id: 0,
  title: 'Article name',
  body: 'This is the article body',
  draft: false,
};

describe('ArticleDetails', () => {
  it('renders the article information', () => {
    render(<ArticleDetails onNavigateBack={jest.fn} article={article} />);

    expect(screen.getByRole('heading', { name: 'Article name' })).toBeInTheDocument();
    expect(screen.getByText('This is the article body')).toBeInTheDocument();
  });

  it('executes onNavigateBack on clicking the back button', () => {
    const spyOnBack = jest.fn();
    render(<ArticleDetails onNavigateBack={spyOnBack} article={article} />);

    userEvent.click(screen.getByRole('button', { name: 'help article back' }));

    expect(spyOnBack).toHaveBeenCalled();
  });

  describe('when article is in draft state', () => {
    it('should render a badge', () => {
      render(<ArticleDetails onNavigateBack={jest.fn} article={{ ...article, draft: true }} />);

      expect(screen.getByRole('heading', { name: 'Article name' })).toBeInTheDocument();
      expect(screen.getByText('This is the article body')).toBeInTheDocument();
      expect(screen.getByText('Draft')).toBeInTheDocument();
    });
  });
});
