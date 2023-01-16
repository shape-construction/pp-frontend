import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import { DocumentExplorerDetails } from './DocumentExplorerDetails';
import { File } from '../types/File';

const defaultDocument: File = {
  id: '1',
  extension: 'pdf',
  filename: 'filename.pdf',
  byteSize: 7512,
  createdAt: '2022-03-30T15:33:33.303Z',
  downloadUrl: 'http://example.com/filename.pdf',
};

const defaultProps = {
  documentIndex: 0,
  documentInfo: { document: defaultDocument },
  isFirst: true,
  isLast: true,
  onNext: () => {},
  onPrevious: () => {},
};

describe('DocumentExplorerDetails', () => {
  it('renders the header ', () => {
    const document = { ...defaultDocument, id: '123', filename: 'TheFilename.ext' };
    const documentInfo = { document, userName: 'Duncan Wolff' };
    const props = { ...defaultProps, documentIndex: 0, documentInfo };

    render(<DocumentExplorerDetails {...props} />);

    expect(screen.getByText('TheFilename.ext')).toBeInTheDocument();
  });

  it('renders the file extension icons on content and header', () => {
    const document = { ...defaultDocument, id: '123', extension: 'dwg' };
    const documentInfo = { document };
    const props = { ...defaultProps, documentIndex: 0, documentInfo };

    render(<DocumentExplorerDetails {...props} />);

    expect(screen.queryAllByTitle('Dwg file extension icon')).toHaveLength(2);
  });

  it('renders the file extension description', () => {
    const document = { ...defaultDocument, id: '123', extension: 'doc' };
    const documentInfo = { document };
    const props = { ...defaultProps, documentIndex: 0, documentInfo };

    render(<DocumentExplorerDetails {...props} />);

    expect(screen.getByText('DOC file')).toBeInTheDocument();
  });

  it('triggers onNext function when next button is clicked', () => {
    const onNext = jest.fn();

    render(<DocumentExplorerDetails {...defaultProps} onNext={onNext} isLast={false} />);

    userEvent.click(screen.getByRole('button', { name: 'Next' }));

    expect(onNext).toBeCalled();
  });

  it('triggers onNext function when right arrow key is pressed', () => {
    const onNext = jest.fn();

    render(<DocumentExplorerDetails {...defaultProps} onNext={onNext} isLast={false} />);

    userEvent.keyboard('{arrowright}');

    expect(onNext).toBeCalled();
  });

  it('triggers onPrevious function when previous button is clicked', () => {
    const onPrevious = jest.fn();

    render(<DocumentExplorerDetails {...defaultProps} onPrevious={onPrevious} isFirst={false} />);

    userEvent.click(screen.getByRole('button', { name: 'Previous' }));

    expect(onPrevious).toBeCalled();
  });

  it('triggers onPrevious function when left arrow key is pressed', () => {
    const onPrevious = jest.fn();

    render(<DocumentExplorerDetails {...defaultProps} onPrevious={onPrevious} isFirst={false} />);

    userEvent.keyboard('{arrowleft}');

    expect(onPrevious).toBeCalled();
  });

  describe('when a delete handler is passed', () => {
    it('shows and calls the handler when delete is pressed', () => {
      const deleteHandler = jest.fn();

      render(<DocumentExplorerDetails {...defaultProps} onDocumentDelete={deleteHandler} />);

      const deleteButton = screen.getByRole('button', { name: 'Delete' });
      expect(deleteButton).toBeInTheDocument();

      fireEvent.click(deleteButton);
      expect(deleteHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('when a delete handler is not passed', () => {
    it('does not show the delete button', () => {
      render(<DocumentExplorerDetails {...defaultProps} onDocumentDelete={undefined} />);

      expect(screen.queryByText('Delete')).not.toBeInTheDocument();
    });
  });
});
