import React from 'react';
import { GalleryImage } from 'types/GalleryImage';

export interface GalleryProps {
  /**
   * Array of URLs for the gallery
   */
  images: GalleryImage[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => (
  <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {images.map((image) => (
      <li key={image.id} className="relative">
        <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100">
          <img
            src={image.imageThumbnailUrl}
            alt={`gallery-img-${image.id}`}
            className="pointer-events-none object-cover"
            aria-label="Gallery image"
          />
        </div>
      </li>
    ))}
  </ul>
);
