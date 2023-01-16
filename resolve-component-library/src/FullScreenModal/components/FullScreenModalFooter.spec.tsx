import React from 'react';
import { render } from '@testing-library/react';

import { FullScreenModalFooter } from './FullScreenModalFooter';
import { Modal } from '../../Modal';

const spyModalFooter = jest.spyOn(Modal, 'Footer');

describe('FullScreenModalFooter', () => {
  it('renders ModalFooter component with topBorder ', () => {
    render(<FullScreenModalFooter />);

    expect(spyModalFooter).toHaveBeenCalledWith(
      expect.objectContaining({ topBorder: true }),
      expect.anything()
    );
  });
});
