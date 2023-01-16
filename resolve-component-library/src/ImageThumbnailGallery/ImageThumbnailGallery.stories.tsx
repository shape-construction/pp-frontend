import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ImageThumbnailGallery, ImageThumbnailGalleryProps } from './ImageThumbnailGallery';
import { ImageFile } from 'types/File';

export default {
  title: 'ImageThumbnailGallery',
  component: ImageThumbnailGallery,
} as Meta<ImageThumbnailGalleryProps>;

const IMAGES: ImageFile[] = [
  {
    id: 'img-1',
    extension: 'png',
    filename: 'kitten.png',
    downloadUrl: '//placekitten.com/1500/500',
    mediaUrl: {
      large: '//placekitten.com/1500/500',
      medium: '//placekitten.com/1500/500',
      thumbnail: '//placekitten.com/1500/500',
    },
  },
  {
    id: 'img-2',
    extension: 'png',
    filename: 'kitten.png',
    downloadUrl: '//placekitten.com/4000/3000',
    mediaUrl: {
      large: '//placekitten.com/4000/3000',
      medium: '//placekitten.com/4000/3000',
      thumbnail: '//placekitten.com/4000/3000',
    },
  },
  {
    id: 'img-3',
    extension: 'png',
    filename: 'kitten.png',
    downloadUrl: '//placekitten.com/800/1200',
    mediaUrl: {
      large: '//placekitten.com/800/1200',
      medium: '//placekitten.com/800/1200',
      thumbnail: '//placekitten.com/800/1200',
    },
  },
  {
    id: 'img-4',
    extension: 'png',
    filename: 'kitten.png',
    downloadUrl: '//placekitten.com/1500/1500',
    mediaUrl: {
      large: '//placekitten.com/1500/1500',
      medium: '//placekitten.com/1500/1500',
      thumbnail: '//placekitten.com/1500/1500',
    },
  },
  {
    id: 'img-5',
    extension: 'png',
    filename: 'kitten.png',
    downloadUrl: '//placekitten.com/900/1100',
    mediaUrl: {
      large: '//placekitten.com/900/1100',
      medium: '//placekitten.com/900/1100',
      thumbnail: '//placekitten.com/900/1100',
    },
  },
  {
    id: 'img-6',
    extension: 'png',
    filename: 'kitten.png',
    downloadUrl: '//placekitten.com/1200/1100',
    mediaUrl: {
      large: '//placekitten.com/1200/1100',
      medium: '//placekitten.com/1200/1100',
      thumbnail: '//placekitten.com/1200/1100',
    },
  },
  {
    id: 'img-7',
    extension: 'png',
    filename: 'kitten.png',
    downloadUrl: '//placekitten.com/1000/1000',
    mediaUrl: {
      large: '//placekitten.com/1000/1000',
      medium: '//placekitten.com/1000/1000',
      thumbnail: '//placekitten.com/1000/1000',
    },
  },
];

const ImageThumbnailGalleryTemplate: Story<ImageThumbnailGalleryProps> = (args: any) => (
  <ImageThumbnailGallery {...args} />
);

export const Default = ImageThumbnailGalleryTemplate.bind({});
Default.args = {
  uploadImageLabel: 'Upload an image',
};
export const WithImages = ImageThumbnailGalleryTemplate.bind({});
WithImages.args = {
  ...Default.args,
  images: IMAGES,
};

export const Uploading = ImageThumbnailGalleryTemplate.bind({});
Uploading.args = {
  ...Default.args,
  images: [
    {
      id: 'uploading-img-1',
      extension: 'png',
      filename: 'kitten.png',
      isUploading: true,
      uploadProgress: 30,
      downloadUrl: '//placekitten.com/1500/500',
      mediaUrl: {
        large: '//placekitten.com/1500/500',
        medium: '//placekitten.com/1500/500',
        thumbnail: '//placekitten.com/1500/500',
      },
    },
    {
      id: 'uploading-img-2',
      extension: 'png',
      filename: 'kitten.png',
      isUploading: true,
      uploadProgress: 30,
      downloadUrl: '//placekitten.com/4000/3000',
      mediaUrl: {
        large: '//placekitten.com/4000/3000',
        medium: '//placekitten.com/4000/3000',
        thumbnail: '//placekitten.com/4000/3000',
      },
    },
    ...IMAGES,
  ],
};
