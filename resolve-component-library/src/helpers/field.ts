export const focusAndSelect = (element?: HTMLInputElement | null) => {
  if (!element) return;
  element.focus();
  element.select();
};
