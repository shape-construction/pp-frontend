import '@testing-library/jest-dom';
import createMatchMedia from './src/tests/create-match-media';
import { fakeIntersectionObserver } from './src/tests/test-utils';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

window.matchMedia = createMatchMedia();

beforeAll(() => {
  window.IntersectionObserver = fakeIntersectionObserver();
});
