import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from './index';

describe('Avatar', () => {
  it('renders the first three letters of text if no image is provided', () => {
    const { container } = render(<Avatar text="Shape" />);

    expect(container).toHaveTextContent('SHA');
  });

  it('renders an img if imgURL is provided', () => {
    render(<Avatar text="Shape" imgURL="some.url" />);

    expect(screen.getByAltText('Shape')).toHaveAttribute('src', 'some.url');
  });

  it('renders an icon if it is provided', () => {
    render(<Avatar text="Shape" icon="this is an icon!" />);

    expect(screen.getByText('this is an icon!')).toBeInTheDocument();
  });
});
