import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputPassword } from './InputPassword';

describe('InputPassword', () => {
  it('renders the input with label', () => {
    render(<InputPassword name="example" label="Example" />);
    expect(screen.getByLabelText('Example')).toBeTruthy();
  });

  it('renders the input with required option', () => {
    render(<InputPassword name="example" label="Example" required />);
    expect(screen.getByLabelText('Example').hasAttribute('required')).toBeTruthy();
  });

  it('renders the input with value', () => {
    render(
      <InputPassword name="example" label="Example" value="secret password" onChange={() => {}} />
    );
    expect(screen.getByLabelText('Example').getAttribute('value')).toBe('secret password');
  });

  it('renders the input with an error message', () => {
    render(
      <InputPassword
        name="example"
        label="Example"
        value="secret password"
        error="This is not a valid password"
        onChange={() => {}}
      />
    );

    expect(screen.getByText('This is not a valid password')).toBeInTheDocument();
  });

  it('does not render the input with an error message if untouched', () => {
    render(
      <InputPassword
        name="example"
        label="Example"
        value="secret password"
        error="This is not a valid password"
        touched={false}
        onChange={() => {}}
      />
    );

    expect(screen.queryByText('This is not a valid password')).not.toBeInTheDocument();
  });

  it('renders the input disabled', () => {
    render(
      <InputPassword
        name="example"
        label="Example"
        value="secret password"
        disabled
        onChange={() => {}}
      />
    );
    expect(screen.getByLabelText('Example')).toBeDisabled();
  });

  it('renders the input with corner adornment', () => {
    render(
      <InputPassword
        name="example"
        label="Example"
        value="secret password"
        cornerAdornment={<>Corner Adornment</>}
        onChange={() => {}}
      />
    );
    expect(screen.getByText('Corner Adornment')).toBeInTheDocument();
  });

  it('sets the input password value using ref', async () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<InputPassword ref={ref} name="example" label="Example" />);
    if (ref.current) {
      ref.current.value = 'secret password';
    }
    expect(screen.getByLabelText('Example')).toHaveValue('secret password');
  });
});
