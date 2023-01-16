import React from 'react';
import { render, screen } from '@testing-library/react';
import { DocumentInfo, DocumentInfoProps } from './DocumentInfo';

const defaultProps: DocumentInfoProps = {
  document: {
    id: '1',
    extension: 'pdf',
    filename: 'filename.pdf',
    byteSize: 7512,
    createdAt: '2022-03-30T15:33:33.303Z',
    downloadUrl: 'http://example.com/filename.pdf',
  },
  userName: 'Esther Howard',
};

const oneMegabyteInBytes = 1048576;

describe('DocumentInfo', () => {
  it('renders the filename', () => {
    render(<DocumentInfo {...defaultProps} />);

    expect(screen.getByText('filename.pdf')).toBeInTheDocument();
  });
  it('renders the username', () => {
    render(<DocumentInfo {...defaultProps} userName="Esther Howard" />);

    expect(screen.getByText(/Esther Howard/)).toBeInTheDocument();
  });
  it('renders the byteSize in megabytes with 2 decimals', () => {
    render(<DocumentInfo {...defaultProps} />);

    expect(screen.getByText(/^0.01/)).toBeInTheDocument();
  });
  it('renders the byteSize in megabytes with no decimals', () => {
    render(
      <DocumentInfo
        {...defaultProps}
        document={{ ...defaultProps.document, byteSize: oneMegabyteInBytes }}
      />
    );

    expect(screen.getByText(/^1/)).toBeInTheDocument();
  });
  it('renders the createdAt as a time ago date', () => {
    render(
      <DocumentInfo
        {...defaultProps}
        document={{ ...defaultProps.document, createdAt: new Date().toString() }}
      />
    );

    expect(screen.getByText(/just now/)).toBeInTheDocument();
  });

  it('renders the byteSize, userName and createdAt as a whole sentence', () => {
    render(
      <DocumentInfo
        {...defaultProps}
        document={{
          ...defaultProps.document,
          createdAt: new Date().toString(),
          byteSize: oneMegabyteInBytes,
        }}
        userName="Esther Howard"
      />
    );

    expect(screen.getByText('1 MB - Esther Howard just now')).toBeInTheDocument();
  });
});
