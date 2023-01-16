import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fakeIntersectionObserver } from '../tests/test-utils';
import { Modal } from './Modal';

describe('Modal', () => {
  beforeEach(() => {
    window.IntersectionObserver = fakeIntersectionObserver();
  });

  describe('ModalHeader', () => {
    it('renders the title section', () => {
      render(
        <Modal open onClose={() => {}}>
          <Modal.Header onClose={() => {}}>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
        </Modal>
      );

      expect(screen.getByText(/modal title/i)).toBeInTheDocument();
    });

    it('renders the subtitle section', () => {
      render(
        <Modal open onClose={() => {}}>
          <Modal.Header onClose={() => {}}>
            <Modal.SubTitle>Modal subtitle</Modal.SubTitle>
          </Modal.Header>
        </Modal>
      );

      expect(screen.getByText(/modal subtitle/i)).toBeInTheDocument();
    });

    it('does not render close button', () => {
      render(
        <Modal open onClose={() => {}}>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <button>cancel</button>
          </Modal.Footer>
        </Modal>
      );

      expect(screen.queryByRole('button', { name: /close overlay/i })).not.toBeInTheDocument();
    });
  });

  it('renders the content section', () => {
    render(
      <Modal open onClose={() => {}}>
        <Modal.Header onClose={() => {}} />
        <Modal.Content>Modal content</Modal.Content>
      </Modal>
    );

    expect(screen.getByText(/modal content/i)).toBeInTheDocument();
  });

  it('renders the footer section', () => {
    render(
      <Modal open onClose={() => {}}>
        <Modal.Header onClose={() => {}} />
        <Modal.Footer>Modal footer</Modal.Footer>
      </Modal>
    );

    expect(screen.getByText(/modal footer/i)).toBeInTheDocument();
  });

  it('invoke onClose on clicking close modal', () => {
    const spyOnClose = jest.fn();
    render(
      <Modal open onClose={spyOnClose}>
        <Modal.Header onClose={spyOnClose} />
        <Modal.Footer>Modal footer</Modal.Footer>
      </Modal>
    );

    userEvent.click(screen.getByRole('button', { name: /close overlay/i }));

    expect(spyOnClose).toBeCalled();
  });

  describe('when disableEscapeKey is enabled', () => {
    describe('when press escape key', () => {
      it('does not invoke onClose', () => {
        const spyOnClose = jest.fn();
        render(
          <Modal open onClose={spyOnClose} disableEscapeKey>
            <Modal.Header onClose={spyOnClose} />
            <Modal.Footer>Modal footer</Modal.Footer>
          </Modal>
        );

        userEvent.type(document.body, '{escape}');

        expect(spyOnClose).not.toHaveBeenCalled();
      });
    });

    describe('and when click outside modal', () => {
      it('does not invoke onClose', () => {
        const spyOnClose = jest.fn();
        render(
          <Modal open onClose={spyOnClose} disableEscapeKey>
            <Modal.Header onClose={spyOnClose} />
            <Modal.Footer>Modal footer</Modal.Footer>
          </Modal>
        );

        userEvent.click(document.body);

        expect(spyOnClose).not.toHaveBeenCalled();
      });
    });
  });
});
