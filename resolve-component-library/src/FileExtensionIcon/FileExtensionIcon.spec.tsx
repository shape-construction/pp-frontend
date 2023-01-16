import React from 'react';
import { render, screen } from '@testing-library/react';
import { FileExtensionIcon } from './FileExtensionIcon';

describe('FileExtensionIcon', () => {
  it('renders the correct icon from a file extenstion', () => {
    render(<FileExtensionIcon extension="pdf" />);

    expect(screen.getByTitle('Pdf file extension icon')).toBeInTheDocument();
  });

  it('renders the default icon when file extension is not recognized', () => {
    render(<FileExtensionIcon extension="random" />);

    expect(screen.getByTitle('Default file extension icon')).toBeInTheDocument();
  });
});
