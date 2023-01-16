import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FileGallery, FileGalleryProps } from './FileGallery';
import { File } from 'types/File';

const FILES: File[] = new Array(7).fill(null).map((_, idx) => ({
  extension: 'pdf',
  filename: 'filename.pdf',
  id: idx.toString(),
  byteSize: 7512,
  createdAt: '2022-03-30T15:33:33.303Z',
  downloadUrl: 'http://www.example.com/filename.pdf',
}));

export default {
  title: 'Design System/FileGallery',
  component: FileGallery,
  args: {
    files: FILES,
  },
  argTypes: { onFileSelect: { action: 'selected!' } },
} as Meta<FileGalleryProps>;

const FileGalleryTemplate: Story<FileGalleryProps> = (args: any) => <FileGallery {...args} />;

export const RowLayout = FileGalleryTemplate.bind({});
RowLayout.args = {
  layout: 'row',
};

export const GridLayout = FileGalleryTemplate.bind({});
GridLayout.args = {
  layout: 'grid',
};
