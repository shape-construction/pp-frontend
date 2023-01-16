import React from 'react';
import FileExtensionIcon from '../FileExtensionIcon';
import { File, ImageFile } from '../types/File';
import ProgressBar from '../ProgressBar/ProgressBar';

export type FileThumbnailProps = Pick<File, 'extension' | 'isUploading' | 'uploadProgress'> & {
  caption: string;
  fileId: File['id'];
  onClick?: (id: string) => void;
  thumbnailUrl?: ImageFile['mediaUrl']['thumbnail'];
};

const FileThumbnail: React.FC<FileThumbnailProps> = ({
  caption,
  extension,
  fileId,
  isUploading,
  uploadProgress,
  onClick,
  thumbnailUrl,
}) => {
  const handleOnClick = () => onClick && onClick(fileId);

  return (
    <button
      disabled={!onClick}
      onClick={handleOnClick}
      className="relative w-40 shrink-0 overflow-hidden rounded-md border border-gray-200"
      aria-label={`thumbnail-${caption}`}
    >
      <figure>
        <div className="flex h-20 items-center justify-center bg-gray-100">
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              className="h-full w-full object-cover"
              aria-label="thumbnail-image"
            />
          ) : (
            <FileExtensionIcon
              data-testid={`extension-${extension}`}
              extension={extension}
              width={40}
              height={40}
            />
          )}
        </div>
        {isUploading && (
          <div data-testid="upload-overlay" aria-busy={isUploading}>
            <div className="absolute top-0 flex h-20 w-full justify-center bg-white align-middle opacity-80"></div>
            {uploadProgress !== undefined && (
              <ProgressBar
                percentage={uploadProgress}
                size="small"
                className="absolute top-[76px] transition-all duration-500 ease-out"
              />
            )}
          </div>
        )}
        <figcaption
          className="m-0 h-8 w-full overflow-hidden text-ellipsis whitespace-nowrap p-2 text-left text-xs text-gray-800"
          title={caption}
        >
          {caption}
        </figcaption>
      </figure>
    </button>
  );
};

export default FileThumbnail;
