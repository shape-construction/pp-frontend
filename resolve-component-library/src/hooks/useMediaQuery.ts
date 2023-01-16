import { useState, useEffect } from 'react';
import isEqual from 'lodash.isequal';

const mediaQueryOptions = {
  'xs': 0,
  'sm': 640,
  'md': 768,
  'lg': 1024,
  'xl': 1280,
  '2xl': 1536,
};

export type Breakpoint = keyof typeof mediaQueryOptions;

const breakpoints = {
  down: (size: Breakpoint) => `(max-width:${mediaQueryOptions[size] - 1}px)`,
  up: (size: Breakpoint) => `(min-width:${mediaQueryOptions[size]}px)`,
  between: (min: Breakpoint, max: Breakpoint) =>
    `(min-width:${mediaQueryOptions[min]}px) and (max-width:${mediaQueryOptions[max] - 1}px)`,
};

const isMatching = (breakpoint: any) => window.matchMedia(breakpoint).matches;

const useMediaQuery = (query: any) => {
  const [matches, setMatches] = useState(isMatching(query));

  useEffect(() => {
    const listener = () => {
      const newMatches = isMatching(query);
      // Used isEqual to avoid setState when the media query results didnt changed
      if (!isEqual(matches, newMatches)) setMatches(newMatches);
    };

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

export { breakpoints, mediaQueryOptions, useMediaQuery };
