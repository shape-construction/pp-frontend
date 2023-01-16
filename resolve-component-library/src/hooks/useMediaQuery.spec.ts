import { renderHook } from '@testing-library/react-hooks';
import { useMediaQuery, breakpoints, mediaQueryOptions, Breakpoint } from './useMediaQuery';
import createMatchMedia from '../tests/create-match-media';

const optionsValues = Object.entries(mediaQueryOptions) as [Breakpoint, number][];

const getMediaResult = (query: any) => {
  const {
    result: { current },
  } = renderHook(() => useMediaQuery(query));

  return current;
};

describe('useMediaQuery', () => {
  describe.each(optionsValues)('testing down method', (mediaKey, width) => {
    it('matches screen widths less than md size', async () => {
      window.matchMedia = createMatchMedia(width - 1);

      const isDown = getMediaResult(breakpoints.down(mediaKey));

      expect(isDown).toEqual(true);
    });
  });

  describe.each(optionsValues)('testing up method', (mediaKey, width) => {
    it('matches screen widths less than md size', async () => {
      window.matchMedia = createMatchMedia(width + 1);

      const isUp = getMediaResult(breakpoints.up(mediaKey));

      expect(isUp).toEqual(true);
    });
  });

  describe('testing between', () => {
    it('return true if size belong between sm and md', () => {
      window.matchMedia = createMatchMedia(700);

      const isBetweenSmAndMd = getMediaResult(breakpoints.between('sm', 'md'));

      expect(isBetweenSmAndMd).toEqual(true);
    });

    it('return false if does not belong to the interval between sm and md', () => {
      window.matchMedia = createMatchMedia(500);

      const isBetweenSmAndMd = getMediaResult(breakpoints.between('sm', 'md'));

      expect(isBetweenSmAndMd).toEqual(false);
    });
  });
});
