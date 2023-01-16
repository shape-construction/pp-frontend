import React from 'react';
import { Meta, Story } from '@storybook/react';
import { GalleryImage } from 'types/GalleryImage';
import { Gallery, GalleryProps } from './Gallery';

export default {
  title: 'Gallery',
  component: Gallery,
} as Meta<GalleryProps>;

const IMAGES: GalleryImage[] = [
  {
    id: 'img-1',
    imageOriginalUrl: '//placekitten.com/1500/500',
    imageDownloadUrl: '//placekitten.com/1500/500',
    imageLargeUrl: '//placekitten.com/1500/500',
    imageMediumUrl: '//placekitten.com/1500/500',
    imageThumbnailUrl: '//placekitten.com/1500/500',
  },
  {
    id: 'img-2',
    imageOriginalUrl: '//placekitten.com/4000/3000',
    imageDownloadUrl: '//placekitten.com/4000/3000',
    imageMediumUrl: '//placekitten.com/4000/3000',
    imageLargeUrl: '//placekitten.com/4000/3000',
    imageThumbnailUrl: '//placekitten.com/4000/3000',
  },
  {
    id: 'img-3',
    imageOriginalUrl: '//placekitten.com/800/1200',
    imageDownloadUrl: '//placekitten.com/800/1200',
    imageLargeUrl: '//placekitten.com/800/1200',
    imageMediumUrl: '//placekitten.com/800/1200',
    imageThumbnailUrl: '//placekitten.com/800/1200',
  },
  {
    id: 'img-4',
    imageOriginalUrl: '//placekitten.com/1500/1500',
    imageDownloadUrl: '//placekitten.com/1500/1500',
    imageLargeUrl: '//placekitten.com/1500/1500',
    imageMediumUrl: '//placekitten.com/1500/1500',
    imageThumbnailUrl: '//placekitten.com/1500/1500',
  },
  {
    id: 'img-5',
    imageOriginalUrl: '//placekitten.com/900/1100',
    imageDownloadUrl: '//placekitten.com/900/1100',
    imageLargeUrl: '//placekitten.com/900/1100',
    imageMediumUrl: '//placekitten.com/900/1100',
    imageThumbnailUrl: '//placekitten.com/900/1100',
  },
  {
    id: 'img-6',
    imageOriginalUrl: '//placekitten.com/1200/1100',
    imageDownloadUrl: '//placekitten.com/1200/1100',
    imageLargeUrl: '//placekitten.com/1200/1100',
    imageMediumUrl: '//placekitten.com/1200/1100',
    imageThumbnailUrl: '//placekitten.com/1200/1100',
  },
  {
    id: 'img-7',
    imageOriginalUrl: '//placekitten.com/1000/1000',
    imageDownloadUrl: '//placekitten.com/1000/1000',
    imageLargeUrl: '//placekitten.com/1000/1000',
    imageMediumUrl: '//placekitten.com/1000/1000',
    imageThumbnailUrl: '//placekitten.com/1000/1000',
  },
];

const GalleryGridTemplate: Story<GalleryProps> = (args) => <Gallery {...args} />;

export const Default = GalleryGridTemplate.bind({});
Default.args = {
  images: IMAGES,
};
