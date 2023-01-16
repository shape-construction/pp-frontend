import React from 'react';
import { render, screen } from '@testing-library/react';
import EmptyListArticles from './EmptyListArticles';

describe('EmptyListArticles', () => {
  it('renders correctly', () => {
    const { container } = render(
      <EmptyListArticles helpCenterEmail="email@email.com" helpCenterUrl="/url" />
    );

    expect(container).toHaveTextContent('No entries found');
    expect(container).toHaveTextContent(
      "We couldn't find any articles related to the current page. You can visit our help center and browse available articles, or you can contact support directly."
    );
    expect(screen.getByRole('link', { name: 'help center' })).toHaveAttribute('href', '/url');
    expect(screen.getByRole('link', { name: 'contact support' })).toHaveAttribute(
      'href',
      'mailto:email@email.com'
    );
  });
});
