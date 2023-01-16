import React from 'react';
import { screen, render } from '@testing-library/react';
import NotificationBadge from './NotificationBadge';

describe('NotificationBadge', () => {
  describe('when is not active', () => {
    it('does not render the notification', () => {
      render(<NotificationBadge active={false} text="100" />);

      expect(screen.queryByRole('status', { name: 'notification' })).not.toBeInTheDocument();
    });
  });

  describe('when is active', () => {
    describe('and does not have text', () => {
      it('renders only the notification badge', () => {
        render(<NotificationBadge active />);

        expect(screen.getByRole('status', { name: 'notification' })).toBeInTheDocument();
      });
    });
    describe('and when have text', () => {
      it('renders the text', () => {
        render(<NotificationBadge active text="100" />);

        expect(screen.getByRole('status', { name: 'notification' })).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
      });
    });
  });
});
