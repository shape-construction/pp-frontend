import React, { FC } from 'react';
// eslint-disable-next-line import/namespace
import * as icons from '../Icons/FilesExtensions';
import { fileExtensionsReferences } from './fileExtensionsIcons';

export interface FileExtensionIconProps extends React.ComponentProps<'svg'> {
  extension: string;
}

export const FileExtensionIcon: React.FC<FileExtensionIconProps> = ({ extension, ...props }) => {
  const fileExtensionIcon = fileExtensionsReferences[extension.toLowerCase()];

  // eslint-disable-next-line import/namespace
  const Icon: FC<React.ComponentProps<'svg'>> = icons[fileExtensionIcon] ?? icons.Default;

  return <Icon {...props} />;
};
