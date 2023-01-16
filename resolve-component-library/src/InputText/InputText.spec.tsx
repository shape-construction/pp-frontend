import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputText } from './InputText';

describe('InputText', () => {
  it('renders the input with label', () => {
    render(<InputText name="example" label="Example" />);
    expect(screen.getByLabelText('Example')).toBeTruthy();
  });

  it('renders the input with required option', () => {
    render(<InputText name="example" label="Example" required />);
    expect(screen.getByLabelText('Example').hasAttribute('required')).toBeTruthy();
  });

  it('renders the input with value', () => {
    render(
      <InputText name="example" label="Example" value="this is the value!" onChange={() => {}} />
    );
    expect(screen.getByLabelText('Example').getAttribute('value')).toBe('this is the value!');
  });

  it('renders the input with an error message', () => {
    render(
      <InputText
        name="example"
        label="Example"
        value="this is the value!"
        error="This is not a valid value"
        onChange={() => {}}
      />
    );

    expect(screen.getByText('This is not a valid value')).toBeTruthy();
  });

  it('does not render the input with an error message if untouched', () => {
    render(
      <InputText
        name="example"
        label="Example"
        value="this is the value!"
        error="This is not a valid value"
        onChange={() => {}}
        touched={false}
      />
    );

    expect(screen.queryByText('This is not a valid value')).not.toBeInTheDocument();
  });

  it('renders the input with description', () => {
    render(
      <InputText
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
      <InputText
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
      <InputText
        name="example"
        label="Example"
        value="this is the value!"
        cornerAdornment={<>Corner Adornment</>}
        onChange={() => {}}
      />
    );
    expect(screen.getByText('Corner Adornment')).toBeInTheDocument();
  });

  it('sets the input value using ref', async () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<InputText ref={ref} name="example" label="Example" />);
    if (ref.current) {
      ref.current.value = 'input value';
    }
    expect(screen.getByLabelText('Example')).toHaveValue('input value');
  });
});
