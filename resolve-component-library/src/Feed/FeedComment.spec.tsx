import React from 'react';
import { render, screen } from '@testing-library/react';
import FeedComment from './FeedComment';

const defaultProps = {
  user: { id: 'user_id', name: 'Rick Sanchez', firstName: 'Rick', lastName: 'Sanchez' },
  body: 'commented',
  date: '25/5',
  comment: 'Wubba Lubba Dub Dub!',
};

describe('FeedComment', () => {
  it('renders the content', () => {
    render(<FeedComment {...defaultProps} />);

    expect(screen.getByTestId('feed-content')).toHaveTextContent('Rick Sanchez commented');
    expect(screen.getByText('25/5')).toBeInTheDocument();
    expect(screen.getByText('Wubba Lubba Dub Dub!')).toBeInTheDocument();
  });
});
