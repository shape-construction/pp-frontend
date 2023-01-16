import React from 'react';
import { render } from '@testing-library/react';

import { FullScreenModalHeader } from './FullScreenModalHeader';
import { Modal } from '../../Modal';

const spyModalHeader = jest.spyOn(Modal, 'Header');

describe('FullScreenModalHeader', () => {
  it('renders ModalHeader component with bottomBorder ', () => {
    render(<FullScreenModalHeader />);

    expect(spyModalHeader).toHaveBeenCalledWith(
      expect.objectContaining({ bottomBorder: true }),
      expect.anything()
    );
  });
});
