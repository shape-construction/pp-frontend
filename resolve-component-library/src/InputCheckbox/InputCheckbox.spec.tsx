import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputCheckbox } from './InputCheckbox';

describe('InputCheckbox', () => {
  it('renders the input with label', () => {
    render(<InputCheckbox name="example" label="Example" onChange={() => {}} />);
    expect(screen.getByLabelText('Example')).toBeTruthy();
  });

  it('renders the input with required option', () => {
    render(<InputCheckbox name="example" label="Example" required onChange={() => {}} />);
    expect(screen.getByLabelText('Example').hasAttribute('required')).toBeTruthy();
  });

  it('renders the input checked', () => {
    render(<InputCheckbox name="example" label="Example" checked onChange={() => {}} />);
    expect(screen.getByLabelText('Example')).toBeChecked();
  });

  it('renders the input with an error message', () => {
    render(
      <InputCheckbox
        name="example"
        label="Example"
        checked
        error="This is a mandatory field"
        onChange={() => {}}
      />
    );

    expect(screen.getByText('This is a mandatory field')).toBeInTheDocument();
  });

  it('does not render the input with an error message if untouched', () => {
    render(
      <InputCheckbox
        name="example"
        label="Example"
        checked
        error="This is a mandatory field"
        touched={false}
        onChange={() => {}}
      />
    );

    expect(screen.queryByText('This is a mandatory field')).not.toBeInTheDocument();
  });

  it('renders the input disabled', () => {
    render(<InputCheckbox name="example" label="Example" disabled onChange={() => {}} />);
    expect(screen.getByLabelText('Example')).toBeDisabled();
  });

  it('sets the input checkbox checked value using ref', async () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<InputCheckbox ref={ref} name="example" label="Example" />);
    if (ref.current) {
      ref.current.checked = true;
    }
    expect(screen.getByLabelText('Example')).toBeChecked();
  });
});
