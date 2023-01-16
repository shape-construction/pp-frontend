import React from 'react';
import { CameraIcon } from '../Icons/solid';

type TakePictureInputProps = {
  uniqueKey: string;
  onChange: (file: File) => void;
  takePictureLabel: string;
};

export const TakePictureInput: React.FC<TakePictureInputProps> = ({
  uniqueKey,
  onChange,
  takePictureLabel,
}) => (
  <label htmlFor={`gallery-take-picture-${uniqueKey}`} className="cursor-pointer">
    <input
      type="file"
      accept=".png, .jpg, .jpeg"
      capture
      id={`gallery-take-picture-${uniqueKey}`}
      className="hidden"
      onChange={(e) => {
        if (e.target.files) onChange(e.target.files[0]);
      }}
    />
    <div className="flex items-center gap-x-2">
      <CameraIcon className="w-5 text-indigo-500" />
      <span className="text-center font-medium text-indigo-500">{takePictureLabel}</span>
    </div>
  </label>
);
