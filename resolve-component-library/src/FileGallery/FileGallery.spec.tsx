import React from 'react';
import { render, screen } from '@testing-library/react';
import { FileGallery } from './FileGallery';

const FILES = [
  {
    extension: 'pdf',
    filename: 'filename.pdf',
    id: '1',
    byteSize: 7512,
    createdAt: '2022-03-30T15:33:33.303Z',
    downloadUrl: 'http://www.example.com/filename.pdf',
  },
];

describe('FileGallery', () => {
  it('renders the row layout version', () => {
    render(<FileGallery files={FILES} layout="row" />);

    expect(screen.getByRole('list')).toHaveClass('overflow-x-auto');
  });

  it('renders the grid layout version', () => {
    render(<FileGallery files={FILES} layout="grid" />);

    expect(screen.getByRole('list')).toHaveClass('flex-wrap');
  });

  it('renders no elements, since there are no files to be displayed', () => {
    render(<FileGallery files={[]} layout="grid" />);

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
