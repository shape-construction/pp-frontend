import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputTextArea } from './InputTextArea';

describe('InputText', () => {
  it('renders the input with label', () => {
    render(<InputTextArea name="example" label="Example" />);
    expect(screen.getByLabelText('Example')).toBeTruthy();
    expect(screen.getByRole('textbox', { name: 'Example' })).toHaveAttribute('data-gramm', 'false');
    expect(screen.getByRole('textbox', { name: 'Example' })).toHaveAttribute(
      'data-enable-grammarly',
      'false'
    );
  });

  it('renders the input with required option', () => {
    render(<InputTextArea name="example" label="Example" required />);
    expect(screen.getByLabelText('Example').hasAttribute('required')).toBeTruthy();
  });

  it('renders the input with value', () => {
    render(
      <InputTextArea
        name="example"
        label="Example"
        value="this is the value!"
        onChange={() => {}}
      />
    );
    expect(screen.getByLabelText('Example')).toHaveValue('this is the value!');
    expect(screen.getByRole('textbox', { name: 'Example' })).toHaveAttribute('data-gramm', 'false');
    expect(screen.getByRole('textbox', { name: 'Example' })).toHaveAttribute(
      'data-enable-grammarly',
      'false'
    );
  });

  it('renders the input with an error message', () => {
    render(
      <InputTextArea
        name="example"
        label="Example"
        value="this is the value!"
        error="This is not a valid value"
        onChange={() => {}}
      />
    );

    expect(screen.getByText('This is not a valid value')).toBeInTheDocument();
  });

  it('does not render the input with an error message if untouched', () => {
    render(
      <InputTextArea
        name="example"
        label="Example"
        value="this is the value!"
        error="This is not a valid value"
        touched={false}
        onChange={() => {}}
      />
    );

    expect(screen.queryByText('This is not a valid value')).not.toBeInTheDocument();
  });

  it('renders the input with description', () => {
    render(
      <InputTextArea
        name="example"
        label="Example"
        value="this is the value!"
        description="this is the description!"
        onChange={() => {}}
      />
    );
    expect(screen.getByText('this is the description!')).toBeTruthy();
  });

  it('renders the input disabled', () => {
    render(
      <InputTextArea
        name="example"
        label="Example"
        value="this is the value!"
        disabled
        onChange={() => {}}
      />
    );
    expect(screen.getByLabelText('Example')).toBeDisabled();
  });

  it('renders the input with corner adornment', () => {
    render(
      <InputTextArea
        name="example"
        label="Example"
        value="this is the value!"
        cornerAdornment={<>Corner Adornment</>}
        onChange={() => {}}
      />
    );
    expect(screen.getByText('Corner Adornment')).toBeInTheDocument();
  });

  it('sets the textarea value using ref', async () => {
    const ref = React.createRef<HTMLTextAreaElement>();

    render(<InputTextArea ref={ref} name="example" label="Example" />);
    if (ref.current) {
      ref.current.value = 'textarea value';
    }
    expect(screen.getByLabelText('Example')).toHaveValue('textarea value');
  });
});
