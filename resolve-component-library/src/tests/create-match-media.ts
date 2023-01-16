import mediaQuery from 'css-mediaquery';

export default function createMatchMedia(width = 1024) {
  return (query: string): MediaQueryList => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
    removeEventListener: () => {},
    addEventListener: () => {},
    dispatchEvent: () => true,
    onchange: () => {},
    media: '',
  });
}
