import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputSelect, InputSelectProps } from './InputSelect';
import { Hobbits } from './InputSelect.stories';

const props = Hobbits.args as InputSelectProps;

describe('InputSelect', () => {
  const defaultProps = { name: 'example', label: 'Example', options: [] };

  it('renders the input with label', () => {
    render(<InputSelect {...defaultProps} label="Example" />);
    expect(screen.getByLabelText('Example')).toBeTruthy();
  });

  it('renders the input with required option', () => {
    render(<InputSelect {...defaultProps} label="Example" required />);
    expect(screen.getByLabelText('Example').hasAttribute('required')).toBeTruthy();
  });

  it('renders the options with the first option selected', () => {
    render(<InputSelect {...defaultProps} options={props.options} />);

    expect(screen.getByText('Frodo Baggins') as HTMLOptionElement).toBeInTheDocument();
    expect(screen.getByText('Samwise Gamgee') as HTMLOptionElement).toBeInTheDocument();
    expect(screen.getByText('Pippin Took') as HTMLOptionElement).toBeInTheDocument();
    expect(screen.getByText('Merry Bradybuck') as HTMLOptionElement).toBeInTheDocument();

    expect((screen.getByText('Frodo Baggins') as HTMLOptionElement).selected).toBeTruthy();
    expect((screen.getByText('Samwise Gamgee') as HTMLOptionElement).selected).toBeFalsy();
  });

  it('renders the input with the requested selected option', () => {
    render(<InputSelect {...defaultProps} value="sam" options={props.options} />);
    expect((screen.getByText('Frodo Baggins') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Samwise Gamgee') as HTMLOptionElement).selected).toBeTruthy();
  });

  it('renders the input with an error message', () => {
    render(<InputSelect {...defaultProps} error="This is not a valid value" />);

    expect(screen.getByText('This is not a valid value')).toBeInTheDocument();
  });

  it('does not render the input with an error message if untouched', () => {
    render(<InputSelect {...defaultProps} error="This is not a valid value" touched={false} />);

    expect(screen.queryByText('This is not a valid value')).not.toBeInTheDocument();
  });

  it('renders the input with description', () => {
    render(<InputSelect {...defaultProps} description="this is the description!" />);
    expect(screen.getByText('this is the description!')).toBeTruthy();
  });

  it('renders the input disabled', () => {
    render(<InputSelect {...defaultProps} label="Example" disabled />);
    expect(screen.getByLabelText('Example')).toBeDisabled();
  });

  it('renders the input with corner adornment', () => {
    render(<InputSelect {...defaultProps} cornerAdornment={<>Corner Adornment</>} />);
    expect(screen.getByText('Corner Adornment')).toBeInTheDocument();
  });

  it('disables options where disabled is true', () => {
    const options = [{ disabled: true, label: 'Disabled' }];
    render(<InputSelect {...defaultProps} options={options} />);

    expect(screen.getByRole('option', { name: 'Disabled' })).toBeDisabled();
  });

  it('sets the input select value using ref', () => {
    const ref = React.createRef<HTMLSelectElement>();

    render(<InputSelect ref={ref} name="example" label="Example" options={props.options} />);
    if (ref.current) {
      ref.current.value = 'sam';
    }
    expect((screen.getByText('Frodo Baggins') as HTMLOptionElement).selected).toBeFalsy();
    expect((screen.getByText('Samwise Gamgee') as HTMLOptionElement).selected).toBeTruthy();
  });
});
