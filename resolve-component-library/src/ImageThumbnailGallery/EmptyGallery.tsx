import React from 'react';
import { ImageUploadIcon } from '../Icons';
import { ImageThumbnailGalleryProps } from './ImageThumbnailGallery';

export type EmptyGalleryProps = {
  uniqueKey: string;
  onNewImage: (file: File) => void;
  uploadImageLabel: ImageThumbnailGalleryProps['uploadImageLabel'];
};

const EmptyGallery: React.FC<EmptyGalleryProps> = ({
  uniqueKey = '',
  onNewImage,
  uploadImageLabel,
}) => {
  return (
    <div
      data-testid="empty-gallery"
      className="flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
    >
      <div className="space-y-3 text-center">
        <ImageUploadIcon data-testid="image-upload-icon" className="mx-auto h-12 w-12" />
        <div className="text-sm">
          <label
            htmlFor={`gallery-empty-${uniqueKey}`}
            className="cursor-pointer font-medium text-indigo-500"
          >
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              id={`gallery-empty-${uniqueKey}`}
              className="hidden"
              onChange={(e) => {
                if (e.target.files) onNewImage(e.target.files[0]);
              }}
            />
            <span>{uploadImageLabel}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default EmptyGallery;
