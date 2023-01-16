import React from 'react';
import { PaperClipIcon } from '../Icons/solid';

type UploadFileInputProps = {
  uniqueKey: string;
  onChange: (file: File) => void;
  uploadImageLabel: string;
};

export const UploadFileInput: React.FC<UploadFileInputProps> = ({
  uniqueKey,
  onChange,
  uploadImageLabel,
}) => (
  <label htmlFor={`gallery-input-${uniqueKey}`} className="cursor-pointer">
    <input
      type="file"
      accept=".png, .jpg, .jpeg"
      id={`gallery-input-${uniqueKey}`}
      className="hidden"
      onChange={(e) => {
        if (e.target.files) onChange(e.target.files[0]);
      }}
    />
    <div className="flex items-center gap-x-2">
      <PaperClipIcon className="w-5 text-indigo-500" />
      <span className="text-center font-medium text-indigo-500">{uploadImageLabel}</span>
    </div>
  </label>
);
