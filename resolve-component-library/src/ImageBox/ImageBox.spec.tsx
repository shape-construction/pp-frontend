import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import ImageBox, { ImageBoxProps } from './ImageBox';

jest.mock('react-image-lightbox/style.css');

describe('ImageBox', () => {
  it('renders properly', () => {
    const props: ImageBoxProps = {
      downloadUrl: '/download',
      onEdit: jest.fn(),
      imageCaption: 'caption',
      imageUrl: '/image',
      isDeleting: false,
      nextImageUrl: 'next',
      onClose: jest.fn(),
      onDelete: jest.fn(),
      onMoveNextRequest: jest.fn(),
      onMovePrevRequest: jest.fn(),
      prevImageUrl: '/previous',
    };

    render(<ImageBox {...props} />);

    expect(screen.getByText('caption')).toBeInTheDocument();
    expect(screen.getByLabelText('Download image')).toBeInTheDocument();
    expect(screen.getByLabelText('Download image')).toHaveAttribute('href', '/download');
    expect(screen.getByLabelText('Delete image')).toBeInTheDocument();
    expect(screen.getByLabelText('Edit image')).toBeInTheDocument();
    expect(screen.getByLabelText('Previous image')).toBeInTheDocument();
    expect(screen.getByLabelText('Next image')).toBeInTheDocument();
  });

  describe('when click on delete button', () => {
    it('calls onDelete', () => {
      const mockOnDelete = jest.fn();
      const props: ImageBoxProps = {
        downloadUrl: '/download',
        onEdit: jest.fn(),
        imageCaption: 'caption',
        imageUrl: '/image',
        isDeleting: false,
        nextImageUrl: 'next',
        onClose: jest.fn(),
        onDelete: mockOnDelete,
        onMoveNextRequest: jest.fn(),
        onMovePrevRequest: jest.fn(),
        prevImageUrl: '/previous',
      };

      render(<ImageBox {...props} />);

      fireEvent.click(screen.getByLabelText('Delete image'));

      expect(mockOnDelete).toHaveBeenCalledTimes(1);
    });
  });
  describe('when click on edit button', () => {
    it('calls onEdit', () => {
      const mockOnEdit = jest.fn();
      const props: ImageBoxProps = {
        downloadUrl: '/download',
        onEdit: mockOnEdit,
        imageCaption: 'caption',
        imageUrl: '/image',
        isDeleting: false,
        nextImageUrl: 'next',
        onClose: jest.fn(),
        onDelete: jest.fn(),
        onMoveNextRequest: jest.fn(),
        onMovePrevRequest: jest.fn(),
        prevImageUrl: '/previous',
      };

      render(<ImageBox {...props} />);

      fireEvent.click(screen.getByLabelText('Edit image'));

      expect(mockOnEdit).toHaveBeenCalledTimes(1);
    });
  });
  describe('when click on previous image button', () => {
    it('calls onMovePrevRequest', () => {
      const mockOnMovePrevRequest = jest.fn();
      const props: ImageBoxProps = {
        downloadUrl: '/download',
        onEdit: jest.fn(),
        imageCaption: 'caption',
        imageUrl: '/image',
        isDeleting: false,
        nextImageUrl: 'next',
        onClose: jest.fn(),
        onDelete: jest.fn(),
        onMoveNextRequest: jest.fn(),
        onMovePrevRequest: mockOnMovePrevRequest,
        prevImageUrl: '/previous',
      };

      render(<ImageBox {...props} />);

      fireEvent.click(screen.getByLabelText('Previous image'));

      expect(mockOnMovePrevRequest).toHaveBeenCalledTimes(1);
    });
  });
  describe('when click on next image button', () => {
    it('calls onMoveNextRequest', () => {
      const mockOnMoveNextRequest = jest.fn();
      const props: ImageBoxProps = {
        downloadUrl: '/download',
        onEdit: jest.fn(),
        imageCaption: 'caption',
        imageUrl: '/image',
        isDeleting: false,
        nextImageUrl: 'next',
        onClose: jest.fn(),
        onDelete: jest.fn(),
        onMoveNextRequest: mockOnMoveNextRequest,
        onMovePrevRequest: jest.fn(),
        prevImageUrl: '/previous',
      };

      render(<ImageBox {...props} />);

      fireEvent.click(screen.getByLabelText('Next image'));

      expect(mockOnMoveNextRequest).toHaveBeenCalledTimes(1);
    });
  });
});
