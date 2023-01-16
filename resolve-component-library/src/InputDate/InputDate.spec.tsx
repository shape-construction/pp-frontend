import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputDate } from './InputDate';

describe('InputDate', () => {
  it('renders the input with label', () => {
    render(<InputDate name="example" label="Example" />);
    expect(screen.getByLabelText('Example')).toBeTruthy();
  });

  it('renders the input with required option', () => {
    render(<InputDate name="example" label="Example" required />);
    expect(screen.getByLabelText('Example').hasAttribute('required')).toBeTruthy();
  });

  it('renders the input with value', () => {
    render(<InputDate name="example" label="Example" value="2020-09-29" onChange={() => {}} />);
    expect(screen.getByLabelText('Example').getAttribute('value')).toBe('2020-09-29');
  });

  it('renders the input with an error message', () => {
    render(
      <InputDate
        name="example"
        label="Example"
        value="2020-09-29"
        error="This is not a valid value"
        onChange={() => {}}
      />
    );

    expect(screen.getByText('This is not a valid value')).toBeInTheDocument();
  });

  it('does not render the input with an error message if untouched', () => {
    render(
      <InputDate
        name="example"
        label="Example"
        value="2020-09-29"
        error="This is not a valid value"
        touched={false}
        onChange={() => {}}
      />
    );

    expect(screen.queryByText('This is not a valid value')).not.toBeInTheDocument();
  });

  it('renders the input with description', () => {
    render(
      <InputDate
        name="example"
        label="Example"
        value="2020-09-29"
        description="this is the description!"
        onChange={() => {}}
      />
    );
    expect(screen.getByText('this is the description!')).toBeTruthy();
  });

  it('renders the input disabled', () => {
    render(
      <InputDate name="example" label="Example" value="2020-09-29" disabled onChange={() => {}} />
    );
    expect(screen.getByLabelText('Example')).toBeDisabled();
  });

  it('renders the input with corner adornment', () => {
    render(
      <InputDate
        name="example"
        label="Example"
        value="this is the value!"
        cornerAdornment={<>Corner Adornment</>}
        onChange={() => {}}
      />
    );
    expect(screen.getByText('Corner Adornment')).toBeInTheDocument();
  });

  it('sets the input date value using ref', async () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<InputDate ref={ref} name="example" label="Example" />);
    if (ref.current) {
      ref.current.value = '2020-09-29';
    }
    expect(screen.getByLabelText('Example')).toHaveValue('2020-09-29');
  });
});
