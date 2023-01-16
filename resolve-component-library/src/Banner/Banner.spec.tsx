import { render, screen } from '@testing-library/react';
import React from 'react';
import { Banner, BannerProps } from './Banner';

describe('Banner', () => {
  it('renders the message', () => {
    const props: BannerProps = {
      message: 'This is a banner message',
      icon: <div>a icon</div>,
    };
    render(<Banner {...props} />);

    expect(screen.getByText('This is a banner message')).toBeInTheDocument();
  });

  it('renders the icon', () => {
    const props: BannerProps = {
      message: 'This is a banner message',
      icon: <div>a icon</div>,
    };
    render(<Banner {...props} />);

    expect(screen.getByText('a icon')).toBeInTheDocument();
  });

  it('renders as floating', () => {
    const props: BannerProps = {
      message: 'This is a banner message',
      icon: <div>a icon</div>,
      floating: true,
    };

    const { container } = render(<Banner {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('renders as centered', () => {
    const props: BannerProps = {
      message: 'This is a banner message',
      icon: <div>a icon</div>,
      centered: true,
    };

    const { container } = render(<Banner {...props} />);

    expect(container).toMatchSnapshot();
  });
});
