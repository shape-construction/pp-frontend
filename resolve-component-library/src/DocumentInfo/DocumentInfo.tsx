import FileExtensionIcon from '../FileExtensionIcon';
import React from 'react';
import { formatTimeAgo } from '../helpers/date';
import { File } from 'types/File';

export interface DocumentInfoProps {
  document: File;
  userName?: string;
}

/**
 * Get byteSize from bytes to megabytes
 * @returns value in megabytes with 0 or 2 decimals or undefined
 */
const getByteSizeInMb = (byteSize: File['byteSize'] = 0) => {
  const valueInMb = byteSize / 1024 / 1024;
  const roundedValue = valueInMb.toFixed(2);
  return parseFloat(roundedValue);
};

export const DocumentInfo: React.VFC<DocumentInfoProps> = ({ document, userName }) => {
  const { byteSize, extension, filename, createdAt } = document;

  return (
    <div className="flex w-full items-center overflow-hidden">
      <FileExtensionIcon extension={extension} width="18" height="24" className="mr-3 shrink-0" />
      <div className="flex-1 overflow-hidden text-xs font-medium leading-4">
        <span className=" block w-full overflow-hidden text-ellipsis whitespace-nowrap text-gray-800">
          {filename}
        </span>
        <p className="text-gray-500">
          {byteSize && `${getByteSizeInMb(byteSize)} MB - ${userName || ''}`}
          {createdAt && ` ${formatTimeAgo(createdAt)}`}
        </p>
      </div>
    </div>
  );
};
