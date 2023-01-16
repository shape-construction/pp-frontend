import React from 'react';
import { render, screen } from '@testing-library/react';
import { GalleryImage } from 'types/GalleryImage';
import { Gallery } from './Gallery';

const images: GalleryImage[] = [
  {
    id: 'img-1',
    imageOriginalUrl: '//example.com/img-original-1',
    imageDownloadUrl: '//example.com/img-download-1',
    imageLargeUrl: '//example.com/img-large-1',
    imageMediumUrl: '//example.com/img-medium-1',
    imageThumbnailUrl: '//example.com/img-thumbnail-1',
  },
  {
    id: 'img-2',
    imageLargeUrl: '//example.com/img-large-2',
    imageOriginalUrl: '//example.com/img-original-2',
    imageDownloadUrl: '//example.com/img-download-2',
    imageMediumUrl: '//example.com/img-medium-2',
    imageThumbnailUrl: '//example.com/img-thumbnail-2',
  },
  {
    id: 'img-3',
    imageLargeUrl: '//example.com/img-large-3',
    imageOriginalUrl: '//example.com/img-original-3',
    imageDownloadUrl: '//example.com/img-download-3',
    imageMediumUrl: '//example.com/img-medium-3',
    imageThumbnailUrl: '//example.com/img-thumbnail-3',
  },
];

describe('Gallery', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('renders a gallery of images', () => {
    render(<Gallery images={images} />);

    const galleryImages = screen.getAllByRole('img', { name: 'Gallery image' });
    expect(galleryImages.length).toEqual(3);
  });

  it("doesn't render gallery if no images are provided", () => {
    render(<Gallery images={[]} />);

    const galleryImages = screen.queryAllByRole('img', { name: 'Gallery image' });
    expect(galleryImages.length).toEqual(0);
  });
});
