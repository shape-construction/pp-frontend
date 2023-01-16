import React from 'react';
import { Field } from 'formik';
import type { FieldInputProps } from 'formik';
import { render, fireEvent, waitFor } from '@testing-library/react';

import OverlayForm from './OverlayForm';

const closeOverlay = jest.fn();
const onSubmit = jest.fn(() => Promise.resolve());
export const formProps = {
  initialValues: {
    example: 'Value',
  },
  closeOverlay,
  formClassNames: 'some-css-class',
  onSubmit,
  confirmCTA: 'Submit!',
};

const renderComponent = () =>
  render(
    <OverlayForm {...formProps}>
      <header data-testid="header">
        <h2>Form Header</h2>
      </header>
      <Field name="example">
        {({ field }: { field: FieldInputProps<string> }) => (
          <label htmlFor="my-input">
            Label Example
            <input type="text" id="my-input" data-testid="my-input" {...field} />
          </label>
        )}
      </Field>
    </OverlayForm>
  );

describe('OverflayForm', () => {
  beforeEach(() => {
    closeOverlay.mockClear();
    onSubmit.mockClear();
  });

  it('input populated with initialValues and in right DOM place', () => {
    const { getByTestId } = renderComponent();

    const inputField = getByTestId('my-input');
    const header = getByTestId('header');
    const section = getByTestId('field-wrapper');

    expect(inputField.getAttribute('value')).toBe('Value');

    expect(section).toContainElement(inputField);
    expect(section).toContainElement(header);
  });

  it('calls closeOverlay when clicking cancel', () => {
    const { getByText } = renderComponent();

    const cancelButton = getByText('Cancel');
    fireEvent.click(cancelButton);

    expect(closeOverlay).toHaveBeenCalledTimes(1);
  });

  it('calls onSubmit when clicking submit', async () => {
    const { getByText } = renderComponent();

    const submitButton = getByText('Submit!');
    fireEvent.click(submitButton);

    expect(submitButton.hasAttribute('disabled')).toBeTruthy();

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(submitButton.hasAttribute('disabled')).toBeFalsy(); // because onSubmit returns a Promise
    });
  });

  it('renders the footer when passed', () => {
    const { getByText } = render(<OverlayForm {...formProps} footer={<>Custom Footer</>} />);
    expect(getByText('Custom Footer')).toBeInTheDocument();
  });
});
