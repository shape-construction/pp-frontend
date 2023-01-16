import React from 'react';
import { render } from '@testing-library/react';
import FeedSimple from './FeedSimple';

const defaultProps = {
  body: 'present,',
  date: '1m ago',
};

describe('FeedSimple', () => {
  it('should have icon classes', () => {
    const fakeIcon: React.FC = (props) => <div {...props} data-testid="fake-icon" />;
    const { getByTestId } = render(
      <FeedSimple {...defaultProps} iconClassNames="my-custom-class" Icon={fakeIcon} />
    );

    expect(getByTestId('fake-icon')).toHaveClass('my-custom-class');
  });
  it('should have spaces between prefix and body', () => {
    const { getByText } = render(<FeedSimple {...defaultProps} prefix="past," suffix="after." />);

    expect(getByText('past, present, after.')).toBeInTheDocument();
  });
});
