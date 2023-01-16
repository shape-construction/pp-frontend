import React from 'react';
import { render, fireEvent, act, screen } from '@testing-library/react';

import { OverlayWithForm, OverlayWithFormProps } from './OverlayWithForm';

const closeOverlay = jest.fn();
const onSubmit = jest.fn();
const defaultProps = {
  title: 'Modal With a form!',
  open: true,
  closeOverlay,
  formProps: {
    initialValues: {},
    onSubmit,
  },
  children: () => <></>,
} as OverlayWithFormProps;

const renderComponent = (props?: OverlayWithFormProps) =>
  render(<OverlayWithForm {...defaultProps} {...props} />);
const rerenderComponent = (
  rerender: (ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>) => void,
  newProps?: OverlayWithFormProps
) => rerender(<OverlayWithForm {...defaultProps} {...newProps} />);

describe('OverlayWithForm', () => {
  beforeEach(async () => {
    // TODO: this can be extracted to jest.setup so it's a common problem for tests
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
    onSubmit.mockClear();
    closeOverlay.mockClear();
  });

  it('calls onSubmit when clicking Save', async () => {
    renderComponent();

    const saveButton = screen.getByText('Save');

    await act(async () => {
      await fireEvent.click(saveButton);
    });

    expect(onSubmit).toBeCalledWith(defaultProps.formProps.initialValues, expect.any(Object));
  });

  it('calls closeOverlay when clicking cancel', () => {
    renderComponent();

    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);

    expect(closeOverlay).toHaveBeenCalledTimes(1);
  });

  describe('when opening and closing two consecutive Modals', () => {
    const firstModalProps = {
      title: 'First Modal',
    } as OverlayWithFormProps;

    const secondModalProps = {
      title: 'Second Modal',
    } as OverlayWithFormProps;

    it('should clean the overflow-hidden prop from html tag', () => {
      const firstModalTree = renderComponent(firstModalProps);
      rerenderComponent(firstModalTree.rerender, { open: false } as OverlayWithFormProps);

      const secondModalTree = renderComponent(secondModalProps);
      rerenderComponent(secondModalTree.rerender, { open: false } as OverlayWithFormProps);

      const htmlTag = secondModalTree.baseElement.parentElement as HTMLElement;
      expect(htmlTag.style.overflow).toEqual('');
    });
  });

  describe('when opening wihtout close button', () => {
    it('should not appear', () => {
      renderComponent({
        showCloseIcon: false,
      } as OverlayWithFormProps);

      expect(screen.queryByLabelText('Close Overlay')).toBeNull();
    });
  });
});
