import React from 'react';
import { render } from '@testing-library/react';
import FeedWrapper from './FeedWrapper';

describe('FeedWrapper', () => {
  it('should render vertical rule', () => {
    const { getByTestId } = render(<FeedWrapper />);

    expect(getByTestId('vertical-rule')).toBeInTheDocument();
  });
  it('should not render vertical rule', () => {
    const { queryByTestId } = render(<FeedWrapper shouldRenderVerticalRule={false} />);

    expect(queryByTestId('vertical-rule')).not.toBeInTheDocument();
  });

  it('should render unread style', () => {
    const { getByTestId } = render(<FeedWrapper isUnread />);

    expect(getByTestId('feed-wrapper-new')).toHaveClass('bg-blue-50');
  });
  it('should not render unread style', () => {
    const { getByTestId } = render(<FeedWrapper />);

    expect(getByTestId('feed-wrapper')).not.toHaveClass('bg-blue-50');
  });
});
