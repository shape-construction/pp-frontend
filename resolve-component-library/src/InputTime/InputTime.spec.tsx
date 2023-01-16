import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputTime } from './InputTime';

describe('InputTime', () => {
  it('renders the input with label', () => {
    render(<InputTime name="example" label="Example" />);
    expect(screen.getByLabelText('Example')).toBeTruthy();
  });

  it('renders the input with required option', () => {
    render(<InputTime name="example" label="Example" required />);
    expect(screen.getByLabelText('Example').hasAttribute('required')).toBeTruthy();
  });

  it('renders the input with value', () => {
    render(<InputTime name="example" label="Example" value="12:30" onChange={() => {}} />);
    expect(screen.getByLabelText('Example').getAttribute('value')).toBe('12:30');
  });

  it('renders the input with an error message', () => {
    render(
      <InputTime
        name="example"
        label="Example"
        value="12:30"
        error="This is not a valid value"
        onChange={() => {}}
      />
    );

    expect(screen.getByText('This is not a valid value')).toBeInTheDocument();
  });

  it('does not render the input with an error message if untouched', () => {
    render(
      <InputTime
        name="example"
        label="Example"
        value="12:30"
        error="This is not a valid value"
        touched={false}
        onChange={() => {}}
      />
    );

    expect(screen.queryByText('This is not a valid value')).not.toBeInTheDocument();
  });

  it('renders the input with description', () => {
    render(
      <InputTime
        name="example"
        label="Example"
        value="12:30"
        description="this is the description!"
        onChange={() => {}}
      />
    );
    expect(screen.getByText('this is the description!')).toBeTruthy();
  });

  it('renders the input disabled', () => {
    render(<InputTime name="example" label="Example" value="12:30" disabled onChange={() => {}} />);
    expect(screen.getByLabelText('Example')).toBeDisabled();
  });

  it('renders the input with corner adornment', () => {
    render(
      <InputTime
        name="example"
        label="Example"
        value="this is the value!"
        cornerAdornment={<>Corner Adornment</>}
        onChange={() => {}}
      />
    );
    expect(screen.getByText('Corner Adornment')).toBeInTheDocument();
  });

  it('sets the input time value using ref', async () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<InputTime ref={ref} name="example" label="Example" />);
    if (ref.current) {
      ref.current.value = '12:30';
    }
    expect(screen.getByLabelText('Example')).toHaveValue('12:30');
  });
});
