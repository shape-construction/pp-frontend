import React from 'react';
import { render, screen } from '@testing-library/react';
import FileThumbnail, { FileThumbnailProps } from './FileThumbnail';
import userEvent from '@testing-library/user-event';

describe('FileThumbnail', () => {
  it('renders properly', () => {
    const props: FileThumbnailProps = {
      caption: 'building',
      extension: 'pdf',
      fileId: '0001',
      isUploading: false,
      onClick: jest.fn(),
    };

    render(<FileThumbnail {...props} />);

    expect(screen.getByTestId('extension-pdf')).toBeInTheDocument();
    expect(screen.getByText('building')).toBeInTheDocument();
    expect(screen.queryByLabelText('thumbnail-image')).not.toBeInTheDocument();
    expect(screen.queryByTestId('upload-overlay')).not.toBeInTheDocument();
  });

  describe('when file is an image', () => {
    it('renders properly', () => {
      const props: FileThumbnailProps = {
        caption: 'photo',
        extension: 'jpg',
        fileId: '0001',
        isUploading: false,
        onClick: jest.fn(),
        thumbnailUrl: '/thumbanil',
      };

      render(<FileThumbnail {...props} />);

      expect(screen.queryByTestId('extension-jpg')).not.toBeInTheDocument();
      expect(screen.getByLabelText('thumbnail-image')).toBeInTheDocument();
    });
  });

  describe('when the file is uploading', () => {
    it('renders an upload overlay', () => {
      const props: FileThumbnailProps = {
        caption: 'photo',
        extension: 'pdf',
        fileId: '0001',
        isUploading: true,
        uploadProgress: 30,
        onClick: jest.fn(),
      };

      render(<FileThumbnail {...props} />);

      expect(screen.getByTestId('upload-overlay')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '30');
    });
  });

  describe('when clicking on thumbnail', () => {
    it('calls onClick', () => {
      const mockOnClick = jest.fn();
      const props: FileThumbnailProps = {
        caption: 'building',
        extension: 'pdf',
        fileId: '0001',
        isUploading: false,
        onClick: mockOnClick,
      };
      render(<FileThumbnail {...props} />);

      userEvent.click(screen.getByText('building'));

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
