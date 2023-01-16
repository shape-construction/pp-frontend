import React from 'react';
import { render, screen } from '@testing-library/react';

import { ImageThumbnailGallery } from './ImageThumbnailGallery';
import { ImageFile } from 'types/File';

const images: ImageFile[] = [
  {
    id: 'img-1',
    extension: 'png',
    filename: 'img1.png',
    downloadUrl: '//example.com/img-download-1',
    mediaUrl: {
      large: '//example.com/img-large-1',
      medium: '//example.com/img-original-1',
      thumbnail: '//example.com/img-thumbnail-1',
    },
  },
  {
    id: 'img-2',
    extension: 'png',
    filename: 'img2.png',
    downloadUrl: '//example.com/img-download-2',
    mediaUrl: {
      large: '//example.com/img-large-2',
      medium: '//example.com/img-original-2',
      thumbnail: '//example.com/img-thumbnail-2',
    },
  },
  {
    id: 'img-3',
    extension: 'png',
    filename: 'img3.png',
    downloadUrl: '//example.com/img-download-3',
    mediaUrl: {
      large: '//example.com/img-large-3',
      medium: '//example.com/img-original-3',
      thumbnail: '//example.com/img-thumbnail-3',
    },
  },
];

describe('ImageThumbnailGallery', () => {
  it('renders a gallery of images thumbnails', () => {
    const props = {
      uniqueKey: 'key',
      images,
      onChange: jest.fn(),
      onOpenPhoto: jest.fn(),
      uploadImageLabel: 'Upload an image',
    };

    render(<ImageThumbnailGallery {...props} images={images} />);

    expect(screen.getAllByLabelText('thumbnail-image')).toHaveLength(3);
  });

  describe('when the list of image thumbnails is empty', () => {
    it('renders the empty gallery', () => {
      const props = {
        uniqueKey: 'key',
        images,
        onChange: jest.fn(),
        onOpenPhoto: jest.fn(),
        uploadImageLabel: 'Upload an image',
      };

      render(<ImageThumbnailGallery {...props} images={[]} />);

      expect(screen.queryAllByLabelText('thumbnail-image')).toHaveLength(0);
      expect(screen.getByTestId('empty-gallery')).toBeDefined();
      expect(screen.getByTestId('image-upload-icon')).toBeDefined();
      expect(screen.getByLabelText('Upload an image')).toBeInTheDocument();
    });
  });
});
