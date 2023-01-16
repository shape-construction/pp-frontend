import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationModal } from './ConfirmationModal';
import Button from '../Button';

describe('ConfirmationModal', () => {
  describe('when rendering Header', () => {
    it('renders the image', () => {
      render(
        <ConfirmationModal open onClose={() => {}}>
          <ConfirmationModal.Header>
            <ConfirmationModal.Image>
              <img src="test" alt="test" />
            </ConfirmationModal.Image>
          </ConfirmationModal.Header>
          <ConfirmationModal.Footer>
            <Button color="primary" variant="contained" size="md" type="submit">
              Submit
            </Button>
          </ConfirmationModal.Footer>
        </ConfirmationModal>
      );

      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('renders the title', () => {
      render(
        <ConfirmationModal open onClose={() => {}}>
          <ConfirmationModal.Header>
            <ConfirmationModal.Title>I am title</ConfirmationModal.Title>
          </ConfirmationModal.Header>
          <ConfirmationModal.Footer>
            <Button color="primary" variant="contained" size="md" type="submit">
              Submit
            </Button>
          </ConfirmationModal.Footer>
        </ConfirmationModal>
      );

      expect(screen.getByRole('heading', { name: /i am title/i })).toBeInTheDocument();
    });

    it('renders the subtitle', () => {
      render(
        <ConfirmationModal open onClose={() => {}}>
          <ConfirmationModal.Header>
            <ConfirmationModal.SubTitle>I am subtitle</ConfirmationModal.SubTitle>
          </ConfirmationModal.Header>
          <ConfirmationModal.Footer>
            <Button color="primary" variant="contained" size="md" type="submit">
              Submit
            </Button>
          </ConfirmationModal.Footer>
        </ConfirmationModal>
      );

      expect(screen.getByRole('heading', { name: /i am subtitle/i })).toBeInTheDocument();
    });

    it('does not render unallowed components inside Header', () => {
      render(
        <ConfirmationModal open onClose={() => {}}>
          <ConfirmationModal.Header>
            <h1>i am not allowed</h1>
          </ConfirmationModal.Header>
          <ConfirmationModal.Footer>
            <Button color="primary" variant="contained" size="md" type="submit">
              Submit
            </Button>
          </ConfirmationModal.Footer>
        </ConfirmationModal>
      );

      expect(screen.queryByRole('heading', { name: /i am not allowed/i })).not.toBeInTheDocument();
    });
  });
});
