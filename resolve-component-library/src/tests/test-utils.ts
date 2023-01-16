import createMatchMedia from './create-match-media';

type JestToErrorArg = Parameters<jest.Matchers<unknown, () => unknown>['toThrow']>[0];

export const expectToThrow = (calfunc: () => unknown, error?: JestToErrorArg) => {
  const spyError = jest.spyOn(global.console, 'error');
  spyError.mockImplementation(() => {});

  expect(calfunc).toThrow(error);

  spyError.mockRestore();
};

export const fakeIntersectionObserver = () => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  return mockIntersectionObserver;
};

export function eachDeviceSize(
  callback: (sizeDescription: string, sizeName: string, viewportWidth: number) => void
) {
  return describe.each([
    ['Larger', 'lg', 1024],
    ['Smaller', 'sm', 620],
  ])('%s screens (%s [%d])', (...args) => {
    beforeEach(() => {
      window.matchMedia = createMatchMedia(args[2]);
    });

    callback(...args);
  });
}
