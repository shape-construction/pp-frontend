import { mediaQueryOptions } from '../hooks';
import React from 'react';
import { render, screen } from '@testing-library/react';
import createMatchMedia from '../tests/create-match-media';
import { DocumentExplorer, DocumentExplorerProps } from './DocumentExplorer';
import { fakeIntersectionObserver } from '../tests/test-utils';
import userEvent from '@testing-library/user-event';
import { File } from 'types/File';

const defaultDocument: File = {
  id: '1',
  extension: 'pdf',
  filename: 'filename.pdf',
  byteSize: 7512,
  createdAt: '2022-03-30T15:33:33.303Z',
  downloadUrl: 'http://example.com/filename.pdf',
};

const defaultDocumentInfo = {
  document: defaultDocument,
  userName: 'Bruce Wayne',
};

const defaultProps: DocumentExplorerProps = {
  documents: [defaultDocument],
  isFirstDocument: false,
  isLastDocument: false,
  onClose: jest.fn(),
  onDocumentSelect: jest.fn(),
  onNextDocument: jest.fn(),
  onPreviousDocument: jest.fn(),
  open: true,
};

describe('DocumentExplorer', () => {
  beforeEach(() => {
    window.IntersectionObserver = fakeIntersectionObserver();
  });

  describe('Header', () => {
    it('renders the title of document details screen', () => {
      render(<DocumentExplorer {...defaultProps} selectedDocumentInfo={defaultDocumentInfo} />);

      expect(screen.getByText('Go back to files')).toBeInTheDocument();
    });

    it('renders the title of documents gallery screen', () => {
      render(<DocumentExplorer {...defaultProps} selectedDocumentInfo={undefined} />);

      expect(screen.getByTestId('modal-header')).toHaveTextContent('Files');
    });

    it('renders the close button', () => {
      render(<DocumentExplorer {...defaultProps} />);

      expect(screen.getByRole('button', { name: 'Close Overlay' })).toBeInTheDocument();
    });

    it('triggers the onClose function when close button is clicked', () => {
      const onClose = jest.fn();
      render(<DocumentExplorer {...defaultProps} onClose={onClose} />);

      userEvent.click(screen.getByRole('button', { name: 'Close Overlay' }));

      expect(onClose).toBeCalledTimes(1);
    });
  });

  describe('Content', () => {
    describe('Document Details screen', () => {
      it('renders the document explorer details of the selected document', () => {
        render(
          <DocumentExplorer
            {...defaultProps}
            selectedDocumentInfo={defaultDocumentInfo}
            documents={[{ ...defaultDocument, extension: 'pdf', filename: 'filename.pdf' }]}
          />
        );

        expect(screen.getByText('filename.pdf')).toBeInTheDocument();
        expect(screen.queryAllByTitle('Pdf file extension icon')).toHaveLength(2);
        expect(screen.getByText('PDF file')).toBeInTheDocument();
      });

      it("renders the gallery if selected document doesn't exist", () => {
        render(<DocumentExplorer {...defaultProps} selectedDocumentInfo={undefined} />);

        expect(screen.getByRole('list')).toBeInTheDocument();
      });

      it('triggers onDocumentSelect function when go back button is clicked', async () => {
        const onDocumentSelect = jest.fn();
        render(
          <DocumentExplorer
            {...defaultProps}
            selectedDocumentInfo={defaultDocumentInfo}
            onDocumentSelect={onDocumentSelect}
          />
        );

        userEvent.click(screen.getByTestId('back-to-gallery'));

        expect(onDocumentSelect).toBeCalledWith();
      });
    });

    describe('Documents Gallery screen', () => {
      it('renders the document gallery when document is not selected', () => {
        render(<DocumentExplorer {...defaultProps} selectedDocumentInfo={undefined} />);

        expect(screen.getByRole('list')).toBeInTheDocument();
      });

      it('triggers onDocumentSelect function when document is clicked', async () => {
        const onDocumentSelect = jest.fn();
        render(
          <DocumentExplorer
            {...defaultProps}
            selectedDocumentInfo={undefined}
            onDocumentSelect={onDocumentSelect}
          />
        );

        userEvent.click(screen.getByText('filename.pdf'));

        expect(onDocumentSelect).toBeCalledWith('1');
      });
    });
  });

  describe('Footer', () => {
    describe('when on large screens', () => {
      beforeEach(() => {
        window.IntersectionObserver = fakeIntersectionObserver();
        window.matchMedia = createMatchMedia(mediaQueryOptions.md + 1);
      });

      it('renders the dismiss button', () => {
        render(<DocumentExplorer {...defaultProps} />);

        expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
      });

      it('triggers the onClose function when dismiss button is clicked', () => {
        const onClose = jest.fn();
        render(<DocumentExplorer {...defaultProps} onClose={onClose} />);

        userEvent.click(screen.getByRole('button', { name: 'Dismiss' }));

        expect(onClose).toBeCalledTimes(1);
      });
    });

    describe('when on small screens', () => {
      beforeEach(() => {
        window.IntersectionObserver = fakeIntersectionObserver();
        window.matchMedia = createMatchMedia(mediaQueryOptions.md - 1);
      });

      it('does not render the dismiss button', () => {
        render(<DocumentExplorer {...defaultProps} />);

        expect(screen.queryByText('Dismiss')).not.toBeInTheDocument();
      });
    });
  });
});
