import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputEmail } from './InputEmail';

describe('InputEmail', () => {
  it('renders the input with label', () => {
    render(<InputEmail name="example" label="Example" />);
    expect(screen.getByLabelText('Example')).toBeTruthy();
  });

  it('renders the input with required option', () => {
    render(<InputEmail name="example" label="Example" required />);
    expect(screen.getByLabelText('Example').hasAttribute('required')).toBeTruthy();
  });

  it('renders the input with value', () => {
    render(
      <InputEmail name="example" label="Example" value="example@value.com" onChange={() => {}} />
    );
    expect(screen.getByLabelText('Example').getAttribute('value')).toBe('example@value.com');
  });

  it('renders the input with an error message', () => {
    render(
      <InputEmail
        name="example"
        label="Example"
        value="example@value.com"
        error="This is not a valid email"
        onChange={() => {}}
      />
    );

    expect(screen.getByText('This is not a valid email')).toBeInTheDocument();
  });

  it('does not render the input with an error message if untouched', () => {
    render(
      <InputEmail
        name="example"
        label="Example"
        value="example@value.com"
        error="This is not a valid email"
        touched={false}
        onChange={() => {}}
      />
    );

    expect(screen.queryByText('This is not a valid email')).not.toBeInTheDocument();
  });

  it('renders the input disabled', () => {
    render(
      <InputEmail
        name="example"
        label="Example"
        value="example@value.com"
        disabled
        onChange={() => {}}
      />
    );
    expect(screen.getByLabelText('Example')).toBeDisabled();
  });

  it('renders the input with corner adornment', () => {
    render(
      <InputEmail
        name="example"
        label="Example"
        value="example@value.com"
        cornerAdornment={<>Corner Adornment</>}
        onChange={() => {}}
      />
    );
    expect(screen.getByText('Corner Adornment')).toBeInTheDocument();
  });

  it('sets the input email value using ref', async () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<InputEmail ref={ref} name="example" label="Example" />);
    if (ref.current) {
      ref.current.value = 'example@value.com';
    }
    expect(screen.getByLabelText('Example')).toHaveValue('example@value.com');
  });
});
