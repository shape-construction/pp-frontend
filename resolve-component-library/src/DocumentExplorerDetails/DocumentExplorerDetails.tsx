import classnames from 'classnames';
import FileExtensionIcon from '../FileExtensionIcon';
import React, { useEffect } from 'react';
import DocumentInfo from '../DocumentInfo';
import { DocumentInfoProps } from 'DocumentInfo/DocumentInfo';
import { ChevronLeftIcon, ChevronRightIcon, DownloadIcon, TrashIcon } from '../Icons/outline';
import Button from '../Button';
import IconButton from '../Button/IconButton';
import Link from '../Link';

export interface DocumentExplorerDetailsProps {
  /**
   * The selected document and user name
   */
  documentInfo: DocumentInfoProps;
  /**
   * States if document selected is the first one of the document list
   */
  isFirst: boolean;
  /**
   * States if document selected is the last one of the document list
   */
  isLast: boolean;
  /**
   * Handler to call when the next action is fired
   */
  onNext: () => void;
  /**
   * Handler to call when the previous action is fired
   */
  onPrevious: () => void;
  /**
   * Handler to call when the delete action is fired
   */
  onDocumentDelete?: (documentId: string) => void;
}

export const DocumentExplorerDetails: React.VFC<DocumentExplorerDetailsProps> = ({
  documentInfo,
  isFirst,
  isLast,
  onNext,
  onPrevious,
  onDocumentDelete,
}) => {
  const { document, userName } = documentInfo;

  const setPreviousDocument = () => {
    onPrevious();
  };

  const setNextDocument = () => {
    onNext();
  };

  const keyDownHandler = (event: KeyboardEvent) => {
    switch (event.code) {
      case 'ArrowLeft':
        if (!isFirst) setPreviousDocument();
        break;
      case 'ArrowRight':
        if (!isLast) setNextDocument();
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentInfo]);

  const handleDelete = () => {
    if (onDocumentDelete) onDocumentDelete(document.id);
  };

  const navigationIcons = {
    previous: ChevronLeftIcon,
    next: ChevronRightIcon,
  };

  const actionsClassName = classnames(
    'col-span-4 col-start-1 row-span-1 row-start-3 text-center',
    'md:row-start-1 md:col-start-3 md:col-span-2 md:text-right',
    'text-sm leading-5 font-medium text-gray-600',
    'flex justify-center md:justify-end items-center space-x-4 divide-x'
  );

  return (
    <div
      className="grid h-full"
      style={{
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateColumns: 'auto 1fr 1fr auto',
      }}
    >
      <header className="col-span-4 col-start-1 row-span-1 row-start-1 md:col-span-2">
        <DocumentInfo document={document} userName={userName} />
      </header>
      <div className="flex flex-col justify-center">
        <IconButton
          type="button"
          icon={navigationIcons.previous}
          disabled={isFirst}
          aria-label="Previous"
          data-cy="submit-comment"
          onClick={setPreviousDocument}
          color="secondary"
          variant="text"
          size="md"
        />
      </div>

      <main className="col-span-2 col-start-2 row-span-1 row-start-2 flex flex-1 flex-col items-center justify-center text-center text-sm font-medium leading-5">
        <div className="py-4">
          <FileExtensionIcon
            extension={document.extension}
            width="180"
            height="180"
            className="mb-4"
          />
          <div className="text-gray-900">{document.extension.toUpperCase()} file</div>
        </div>
      </main>
      <div className="flex flex-col justify-center">
        <IconButton
          type="button"
          icon={navigationIcons.next}
          disabled={isLast}
          aria-label="Next"
          data-cy="submit-comment"
          onClick={setNextDocument}
          color="secondary"
          variant="text"
          size="md"
        />
      </div>

      <div className={actionsClassName}>
        <Link
          color="secondary"
          href={document.downloadUrl}
          rel="noreferrer"
          leadingIcon={DownloadIcon}
          underline="none"
        >
          Download
        </Link>
        {onDocumentDelete && (
          <div>
            <Button
              color="danger"
              variant="text"
              size="sm"
              leadingIcon={TrashIcon}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
