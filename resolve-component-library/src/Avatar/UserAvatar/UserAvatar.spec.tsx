import React from 'react';
import { render } from '@testing-library/react';
import { UserAvatar, UserAvatarProps } from './index';

const user = { id: 'user_id', name: 'Hey Ho', firstName: 'Hey', lastName: 'Ho' };
const renderComponent = (args: Partial<UserAvatarProps> = {}) =>
  render(<UserAvatar size="md" {...args} />);

describe('UserAvatar', () => {
  it('renders a fallback with background if has no avatar', () => {
    const { getByRole } = renderComponent({ user });

    const divElement = getByRole('presentation');
    expect(divElement).toHaveTextContent('HH');
    expect(divElement).toHaveClass('bg-indigo-400');
    expect(divElement).not.toHaveClass('ring-2');
  });

  it('renders a fallback with background if has no avatar, with highlight', () => {
    const { getByRole } = renderComponent({ user, highlighted: true });

    const divElement = getByRole('presentation');
    expect(divElement).toHaveTextContent('HH');
    expect(divElement).toHaveClass('bg-indigo-400');
    expect(divElement).toHaveClass('ring-2');
  });

  it('renders a fallback with background if has no avatar or lastName', () => {
    const { getByRole } = renderComponent({ user: { ...user, lastName: undefined } });

    expect(getByRole('presentation')).toHaveTextContent(/HE/i);
  });

  it('falls back to name if firstName is null', () => {
    const { getByRole } = renderComponent({ user: { id: 'user_id', name: 'Hey Ho' } });

    expect(getByRole('presentation')).toHaveTextContent(/He/);
  });

  it('renders an img if has avatar', () => {
    const { getByAltText, getByRole } = renderComponent({
      user: { ...user, avatarUrl: 'some.url' },
    });

    expect(getByAltText('Hey Ho')).toHaveAttribute('src', 'some.url');
    expect(getByRole('presentation')).not.toHaveClass('ring-2');
  });

  it('renders an img if has avatar, with highlight', () => {
    const { getByAltText, getByRole } = renderComponent({
      user: { ...user, avatarUrl: 'some.url' },
      highlighted: true,
    });

    expect(getByAltText('Hey Ho')).toHaveAttribute('src', 'some.url');
    expect(getByRole('presentation')).toHaveClass('ring-2');
  });

  it('renders a default profile svg if no user', () => {
    const { getByRole } = render(<UserAvatar size="md" />);

    expect(getByRole('presentation', { name: 'Generic user' })).toBeInTheDocument();
  });
});
