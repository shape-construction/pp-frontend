import React from 'react';
import { render } from '@testing-library/react';
import { fakeIntersectionObserver } from '../tests/test-utils';

import { FullScreenModal } from './FullScreenModal';
import createMatchMedia from '../tests/create-match-media';
import { mediaQueryOptions } from '../hooks';
import * as ModalModule from '../Modal/Modal';

const spyModal = jest.spyOn(ModalModule, 'Modal');

describe('FullScreenModal', () => {
  const defaultProps = {
    open: true,
    onClose: jest.fn(),
  };

  describe('when on small screens', () => {
    beforeEach(() => {
      window.IntersectionObserver = fakeIntersectionObserver();
      window.matchMedia = createMatchMedia(mediaQueryOptions.md - 1);
    });

    it('renders Modal component in fullscreen ', () => {
      render(
        <FullScreenModal {...defaultProps}>
          <input />
        </FullScreenModal>
      );

      expect(spyModal).toHaveBeenCalledWith(
        expect.objectContaining({ fullScreen: true, outsidePad: false, roundBorders: false }),
        expect.anything()
      );
    });
  });

  describe('when on large screens', () => {
    beforeEach(() => {
      window.IntersectionObserver = fakeIntersectionObserver();
      window.matchMedia = createMatchMedia(mediaQueryOptions.md + 1);
    });

    it('renders Modal component in padded fullscreen ', () => {
      render(
        <FullScreenModal {...defaultProps}>
          <input />
        </FullScreenModal>
      );

      expect(spyModal).toHaveBeenCalledWith(
        expect.objectContaining({ fullScreen: true, outsidePad: true, roundBorders: true }),
        expect.anything()
      );
    });
  });
});
