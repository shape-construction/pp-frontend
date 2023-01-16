import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { DocumentExplorer, DocumentExplorerProps } from './DocumentExplorer';
import { DocumentInfoProps } from 'DocumentInfo/DocumentInfo';
import Button from '../Button';

const DOCUMENTS_INFO: DocumentInfoProps[] = [
  {
    document: {
      byteSize: 102400,
      extension: 'pdf',
      filename: 'filename.pdf',
      id: '1',
      createdAt: '2022-03-30T15:33:33.303Z',
      downloadUrl: 'http://placekitten.com/200/300',
    },
    userName: 'Dick Tracy',
  },
  {
    document: {
      byteSize: 102400,
      extension: 'docx',
      filename: 'filename.docx',
      id: '2',
      createdAt: '2022-04-30T15:33:33.303Z',
      downloadUrl: 'http://placekitten.com/200/300',
    },
  },
];

const DOCUMENTS = DOCUMENTS_INFO.map(({ document }) => document);

const defaultProps = {
  documents: DOCUMENTS,
  isFirstDocument: false,
  isLastDocument: false,
  onClose: () => {},
  onNextDocument: () => {},
  onPreviousDocument: () => {},
  onDocumentSelect: () => {},
  open: true,
};

export default {
  title: 'Design System/DocumentExplorer',
  component: DocumentExplorer,
  argTypes: { onDocumentDelete: { action: 'onDelete' } },
} as Meta<DocumentExplorerProps>;

export const DocumentsDetails: Story<DocumentExplorerProps> = (args) => {
  const [isOpen, setIsOpen] = useState(Boolean(args.open));
  const [selectedDocumentIndex, setSelectedDocumentIndex] = useState<number | undefined>(0);
  const [selectedDocument, setSelectedDocument] = useState<DocumentInfoProps | undefined>(
    args.selectedDocumentInfo
  );

  const openGallery = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDocumentSelect = (documentId?: string) => {
    if (documentId) {
      setSelectedDocument(DOCUMENTS_INFO.find(({ document }) => document.id === documentId));
      setSelectedDocumentIndex(
        DOCUMENTS_INFO.findIndex(({ document }) => document.id === documentId)
      );
    }
  };

  useEffect(() => {
    setIsOpen(Boolean(args.open));
  }, [args.open]);

  return (
    <>
      <Button color="primary" variant="contained" size="md" onClick={openGallery}>
        Open Gallery
      </Button>

      <DocumentExplorer
        {...defaultProps}
        documents={args.documents}
        onClose={handleClose}
        open={isOpen}
        selectedDocumentInfo={selectedDocument}
        onDocumentSelect={handleDocumentSelect}
        isFirstDocument={selectedDocumentIndex === 0}
        isLastDocument={selectedDocumentIndex === 1}
        onNextDocument={() => handleDocumentSelect('2')}
        onPreviousDocument={() => handleDocumentSelect('1')}
        onDocumentDelete={args.onDocumentDelete}
      />
    </>
  );
};
DocumentsDetails.args = {
  open: true,
  documents: DOCUMENTS,
  selectedDocumentInfo: DOCUMENTS_INFO[0],
};

export const DocumentsGallery: Story<DocumentExplorerProps> = (args) => {
  const [isOpen, setIsOpen] = useState(Boolean(args.open));

  const openGallery = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(Boolean(args.open));
  }, [args.open]);

  return (
    <>
      <Button color="primary" variant="contained" size="md" onClick={openGallery}>
        Open Gallery
      </Button>

      <DocumentExplorer
        {...defaultProps}
        documents={args.documents}
        onClose={handleClose}
        open={isOpen}
        onDocumentDelete={args.onDocumentDelete}
        onNextDocument={args.onNextDocument}
        onPreviousDocument={args.onPreviousDocument}
      />
    </>
  );
};
DocumentsGallery.args = {
  ...defaultProps,
  open: true,
  documents: DOCUMENTS,
};
