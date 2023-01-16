import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, within } from '@testing-library/react';
import { fakeIntersectionObserver } from '../../tests/test-utils';
import { NotificationModal } from './NotificationModal';

describe('NotificationModal', () => {
  beforeEach(() => {
    window.IntersectionObserver = fakeIntersectionObserver();
  });

  it('renders the title', () => {
    render(<NotificationModal title="Title example" isOpen={true} onClose={jest.fn()} />);

    expect(screen.getByText(/title example/i)).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(
      <NotificationModal
        title="Title example"
        isOpen={true}
        onClose={jest.fn()}
        subTitle="Subtitle example"
      />
    );

    expect(screen.getByText(/subtitle example/i)).toBeInTheDocument();
  });

  it('render the action', () => {
    render(
      <NotificationModal
        title={'Title example'}
        isOpen={true}
        onClose={jest.fn()}
        actionText="Okay"
      />
    );

    const actions = screen.getByRole('list', { name: 'actions' });
    expect(within(actions).getByRole('button', { name: /okay/i })).toBeInTheDocument();
  });

  it('does not render the action', () => {
    render(<NotificationModal title="Title example" isOpen={true} onClose={jest.fn()} />);

    expect(screen.queryByRole('list', { name: 'actions' })).not.toBeInTheDocument();
  });

  describe('when the user clicks outside the modal', () => {
    fit('invokes onClose', () => {
      const spyOnClose = jest.fn();
      render(<NotificationModal title="Title example" isOpen={true} onClose={spyOnClose} />);

      // Click on outside overlay
      userEvent.click(document.querySelector('div[aria-hidden="true"]') as HTMLElement);

      expect(spyOnClose).toBeCalledTimes(1);
    });
  });
});
