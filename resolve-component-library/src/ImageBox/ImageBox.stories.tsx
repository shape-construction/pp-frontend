import React from 'react';
import { Meta, Story } from '@storybook/react';
import ImageBox, { ImageBoxProps } from './ImageBox';

export default {
  title: 'ImageBox',
  component: ImageBox,
} as Meta<ImageBoxProps>;

const ImageThumbnailGalleryTemplate: Story<ImageBoxProps> = (args: any) => <ImageBox {...args} />;

export const Default = ImageThumbnailGalleryTemplate.bind({});
Default.args = {
  imageCaption: 'placekitten',
  downloadUrl: '//placekitten.com/1500/500',
  imageUrl: '//placekitten.com/1500/500',
  nextImageUrl: '//placekitten.com/4000/3000',
  prevImageUrl: '//placekitten.com/800/1200',
  editCaption: () => {},
};
