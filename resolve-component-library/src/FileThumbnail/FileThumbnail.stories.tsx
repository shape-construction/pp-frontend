import React from 'react';
import { Meta, Story } from '@storybook/react';
import FileThumbnail, { FileThumbnailProps } from './FileThumbnail';

export default {
  title: 'Design System/FileThumbnail',
  component: FileThumbnail,
} as Meta<FileThumbnailProps>;

const FileThumbnailTemplate: Story<FileThumbnailProps> = (args: any) => <FileThumbnail {...args} />;

const defaultArgs = {
  extension: 'pdf',
  caption: ' report_2022-02-16.pdf',
};

export const Default = FileThumbnailTemplate.bind({});
Default.args = {
  ...defaultArgs,
};

export const LongFileName = FileThumbnailTemplate.bind({});
LongFileName.args = {
  ...defaultArgs,
  fileId: '2',
  extension: 'jpg',
  caption: 'filenameThatIsVeryVeryVeryVeryVeryVeryVeryLong.jpg',
};

export const LongFileNameWithSpaces = FileThumbnailTemplate.bind({});
LongFileNameWithSpaces.args = {
  ...defaultArgs,
  fileId: '3',
  extension: 'jpg',
  caption: 'filename That Is Very Very Very Very Very Very Very Long.jpg',
};

export const isUploading = FileThumbnailTemplate.bind({});
isUploading.args = {
  ...defaultArgs,
  isUploading: true,
  uploadProgress: 30,
};

export const isImage = FileThumbnailTemplate.bind({});
isImage.args = {
  ...defaultArgs,
  extension: 'jpg',
  caption: 'kitten',
  thumbnailUrl: '//placekitten.com/1500/500',
};
