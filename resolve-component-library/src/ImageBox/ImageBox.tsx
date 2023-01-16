import { DownloadIcon, PencilIcon, TrashIcon, DocumentTextIcon } from '../Icons/solid';
import classNames from 'classnames';
import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

type EditCaptionButtonProps = {
  editCaption?: () => void;
};

const EditCaptionButton: React.FC<EditCaptionButtonProps> = ({ editCaption }) => {
  if (!editCaption) return null;

  return (
    <button
      aria-label="Edit caption"
      className="ril__toolbarItemChild mr-3 opacity-70"
      onClick={editCaption}
      type="button"
    >
      <DocumentTextIcon className="w-6" />
    </button>
  );
};

type DownloadButtonProps = {
  downloadUrl: string;
};

const DownloadButton: React.FC<DownloadButtonProps> = ({ downloadUrl }) => {
  return (
    <a
      href={downloadUrl}
      aria-label="Download image"
      rel="noreferrer"
      className="mr-3 inline-block align-middle opacity-70 hover:opacity-100 focus:opacity-100"
    >
      <DownloadIcon className="w-6" />
    </a>
  );
};

type DeleteButtonProps = {
  isDeleting: boolean;
  onDelete: () => void;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ isDeleting, onDelete }) => (
  <button
    aria-label="Delete image"
    className={classNames('ril__toolbarItemChild mr-3 opacity-70', {
      'hover:opacity-100': !isDeleting,
      'cursor-not-allowed': isDeleting,
    })}
    disabled={isDeleting}
    onClick={onDelete}
    type="button"
  >
    <TrashIcon className="w-6" />
  </button>
);

type EditButtonProps = {
  onEdit: (() => void) | undefined;
};

const EditButton: React.FC<EditButtonProps> = ({ onEdit }) => {
  if (!onEdit) return null;

  return (
    <button
      aria-label="Edit image"
      className="ril__toolbarItemChild mr-3 opacity-70 hover:opacity-100"
      onClick={onEdit}
      type="button"
    >
      <PencilIcon className="w-6" />
    </button>
  );
};

export type ImageBoxProps = {
  downloadUrl: string;
  onEdit?: () => void;
  imageCaption: string;
  editCaption?: () => void;
  imageUrl: string;
  isDeleting: boolean;
  nextImageUrl: string;
  onClose: () => void;
  onDelete: () => void;
  onMoveNextRequest: () => void;
  onMovePrevRequest: () => void;
  prevImageUrl: string;
  reactModalProps?: {
    appElement: HTMLElement | null;
  };
};

const ImageBox: React.FC<ImageBoxProps> = ({
  downloadUrl,
  onEdit,
  imageCaption,
  editCaption,
  imageUrl,
  isDeleting,
  nextImageUrl,
  onClose,
  onDelete,
  onMoveNextRequest,
  onMovePrevRequest,
  prevImageUrl,
  reactModalProps,
}) => (
  <Lightbox
    reactModalStyle={{
      overlay: { zIndex: 20 },
    }}
    reactModalProps={reactModalProps}
    mainSrc={imageUrl}
    nextSrc={nextImageUrl}
    prevSrc={prevImageUrl}
    imageCaption={imageCaption}
    onCloseRequest={onClose}
    onMovePrevRequest={onMovePrevRequest}
    onMoveNextRequest={onMoveNextRequest}
    toolbarButtons={[
      <DownloadButton key="download_button" downloadUrl={downloadUrl} />,
      <DeleteButton key="delete_button" isDeleting={isDeleting} onDelete={onDelete} />,
      <EditButton key="edit_button" onEdit={onEdit} />,
      <EditCaptionButton key="edit_caption_button" editCaption={editCaption} />,
    ]}
  />
);

export default ImageBox;
