import classNames from 'classnames';
import React from 'react';
import { File } from 'types/File';
import FileThumbnail from '../FileThumbnail/FileThumbnail';

export interface FileGalleryProps {
  /**
   * array of files to be displayed
   */
  files: File[];
  /**
   * determine the layout of the gallery: row of files or grid of files
   */
  layout: 'row' | 'grid';
  /**
   *
   */
  onFileSelect?: (id: string) => void;
}

export const FileGallery: React.FC<FileGalleryProps> = ({ files, layout, onFileSelect }) => {
  const layoutClassNames = classNames({
    'gap-x-3 overflow-x-auto': layout === 'row',
    'flex-wrap gap-6': layout === 'grid',
  });

  if (files.length === 0) return null;

  return (
    <ul className={`flex ${layoutClassNames}`}>
      {files.map((file) => (
        <li key={file.id}>
          <FileThumbnail
            onClick={onFileSelect}
            caption={file.caption || file.filename}
            extension={file.extension}
            fileId={file.id}
            isUploading={file.isUploading}
            uploadProgress={file.uploadProgress}
            thumbnailUrl={file.mediaUrl?.thumbnail}
          />
        </li>
      ))}
    </ul>
  );
};
