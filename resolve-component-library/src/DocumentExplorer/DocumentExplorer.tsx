import React from 'react';
import { ArrowNarrowLeftIcon } from '../Icons/solid';

import FullScreenModal from '../FullScreenModal';
import DocumentExplorerDetails from '../DocumentExplorerDetails';
import { FileGallery } from '../FileGallery/FileGallery';
import { useMediaQuery, breakpoints } from '../hooks';
import { DocumentInfoProps } from '../DocumentInfo/DocumentInfo';
import { File } from '../types/File';
import Button from '../Button';
import Link from '../Link';

export interface DocumentExplorerProps {
  /**
   * The list of available documents
   */
  documents: File[];
  /**
   * If the selectedDocument is the first document on the list.
   * Useful to know if we can trigger "onPreviousDocument"
   */
  isFirstDocument: boolean;
  /**
   * If the selectedDocument is the last document on the list.
   * Useful to know if we can trigger "onNextDocument"
   */
  isLastDocument: boolean;
  /**
   * Handler to call when BackToGallery action is selected
   */
  onNextDocument: () => void;
  /**
   * Handler to call when "select previous document" action is selected,
   * either by click or keypress
   */
  onPreviousDocument: () => void;
  /**
   * Handler to call when the dismisses the Explorer Modal
   */
  onClose: () => void;
  /**
   * Handler to call when the user clocks on the delete button
   */
  onDocumentDelete?: (id: string) => void;
  /**
   * Handler to call when a new document is selected
   */
  onDocumentSelect: (id?: string) => void;
  /**
   * Is the explorer Modal open?
   */
  open: boolean;
  /**
   * The current selected document. If present, the explorer should open the Explorer Details,
   * otherwise it should open the Explorer Gallery.
   */
  selectedDocumentInfo?: DocumentInfoProps;
}

export const DocumentExplorer: React.VFC<DocumentExplorerProps> = ({
  documents,
  isFirstDocument,
  isLastDocument,
  onClose,
  onDocumentDelete,
  onDocumentSelect,
  onNextDocument,
  onPreviousDocument,
  open,
  selectedDocumentInfo,
}) => {
  const goBackToGallery = () => onDocumentSelect();
  const isSmallScreen = useMediaQuery(breakpoints.down('md'));

  const screens = {
    gallery: {
      header: 'Files',
      // eslint-disable-next-line react/display-name
      Content: () => (
        <FileGallery files={documents} layout="grid" onFileSelect={onDocumentSelect} />
      ),
    },
    document: {
      header: (
        <div className="flex items-center gap-2 text-lg font-medium leading-7">
          <Link
            color="secondary"
            as="button"
            onClick={goBackToGallery}
            leadingIcon={ArrowNarrowLeftIcon}
            data-testid="back-to-gallery"
          >
            Go back to files
          </Link>
        </div>
      ),
      // eslint-disable-next-line react/display-name
      Content: () => {
        return selectedDocumentInfo ? (
          <DocumentExplorerDetails
            documentInfo={selectedDocumentInfo}
            onNext={onNextDocument}
            onPrevious={onPreviousDocument}
            isFirst={isFirstDocument}
            isLast={isLastDocument}
            onDocumentDelete={onDocumentDelete}
          />
        ) : (
          <></>
        );
      },
    },
  };

  const { header, Content } = selectedDocumentInfo ? screens.document : screens.gallery;

  return (
    <FullScreenModal open={open} onClose={onClose}>
      <FullScreenModal.Header onClose={onClose}>{header}</FullScreenModal.Header>
      <FullScreenModal.Content>
        <div className="h-full py-4">
          <Content />
        </div>
      </FullScreenModal.Content>
      {!isSmallScreen && (
        <FullScreenModal.Footer>
          <Button color="secondary" variant="outlined" size="md" onClick={onClose}>
            Dismiss
          </Button>
        </FullScreenModal.Footer>
      )}
    </FullScreenModal>
  );
};
