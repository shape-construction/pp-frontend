import React from 'react';
import { FileGallery } from '../FileGallery/FileGallery';
import EmptyGallery from './EmptyGallery';
import { ImageFile } from '../types/File';

export interface ImageThumbnailGalleryProps {
  /**
   * Unique identifier to be used in input file ids
   */
  uniqueKey: string;
  /**
   * Array of URLs for the gallery
   */
  images: ImageFile[];
  /**
   * Callback that runs on file change
   * @param file - File that was selected by the user
   */
  onChange: (file: File) => void;
  /**
   * Callback that runs on selecting an image
   * @param index - Image index selected by the user
   */
  onOpenPhoto: (fileId: ImageFile['id']) => void;
  /**
   * String that display the copy for uploading an image functionality
   */
  uploadImageLabel: string;
}

export const ImageThumbnailGallery: React.FC<ImageThumbnailGalleryProps> = ({
  uniqueKey,
  images,
  onChange,
  onOpenPhoto,
  uploadImageLabel,
}) => {
  const hasImages = images && images.length > 0;

  return (
    <>
      {hasImages ? (
        <FileGallery files={images} onFileSelect={onOpenPhoto} layout={'row'} />
      ) : (
        <EmptyGallery
          uniqueKey={uniqueKey}
          uploadImageLabel={uploadImageLabel}
          onNewImage={onChange}
        />
      )}
    </>
  );
};
