import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { InputRadioGroup, InputRadioGroupOptionProps } from './InputRadioGroup';

const options: InputRadioGroupOptionProps[] = [
  { label: 'This is a label', value: 'example', description: 'This is a description' },
  {
    label: 'This is another label',
    value: 'another example',
    description: 'And this is another one',
  },
];

describe('InputRadioGroup', () => {
  it('renders with label', () => {
    render(
      <InputRadioGroup
        name="example"
        label="Example of Label"
        value="example"
        options={options}
        setFieldValue={() => {}}
      />
    );

    expect(screen.getByLabelText('Example of Label')).toBeInTheDocument();
  });

  it('renders with options', () => {
    render(
      <InputRadioGroup
        name="example"
        label="Example"
        value="another example"
        options={options}
        setFieldValue={() => {}}
      />
    );

    expect(screen.getByText('This is a label')).toBeInTheDocument();
    expect(screen.getByText('This is another label')).toBeInTheDocument();
  });

  it('renders with an error message', () => {
    render(
      <InputRadioGroup
        name="example"
        label="Example"
        value="another example"
        options={options}
        setFieldValue={() => {}}
        error="This is not valid!"
      />
    );

    expect(screen.getByText('This is not valid!')).toBeInTheDocument();
  });

  it('does not render with an error message if untouched', () => {
    render(
      <InputRadioGroup
        name="example"
        label="Example"
        value="another example"
        options={options}
        setFieldValue={() => {}}
        error="This is not valid!"
        touched={false}
      />
    );

    expect(screen.queryByText('This is not valid!')).not.toBeInTheDocument();
  });

  it('calls setFieldValue when value changes', () => {
    const mockedFieldValue = jest.fn();
    render(
      <InputRadioGroup
        name="example"
        label="Example of Label"
        value="another example"
        options={options}
        setFieldValue={mockedFieldValue}
        error="This is not valid!"
      />
    );
    const firstOption = screen.getByLabelText('This is a label');
    const secondOption = screen.getByLabelText('This is another label');

    fireEvent.click(secondOption);
    // value didn't changes from previous passed by props
    expect(mockedFieldValue).toHaveBeenCalledTimes(0);

    fireEvent.click(firstOption);

    // value changed from initial
    expect(mockedFieldValue).toHaveBeenCalledTimes(1);
    expect(mockedFieldValue).toHaveBeenCalledWith('example', 'example');
  });

  it('sets the radio value using ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<InputRadioGroup ref={ref} name="example" label="Example" options={options} />);
    if (ref.current) {
      ref.current.value = 'example';
    }
    expect(screen.getByLabelText('Example')).toHaveValue('example');
  });
});
