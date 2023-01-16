import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {
  InputRadioButtonGroup,
  InputRadioButtonGroupOption,
  InputRadioButtonGroupProps,
} from './InputRadioButtonGroup';

const options: InputRadioButtonGroupOption[] = [
  { label: 'This is a label', value: 'example', description: 'This is a description' },
  {
    label: 'This is another label',
    value: 'another example',
    description: 'And this is another one',
  },
];

describe('InputRadioButtonGroup', () => {
  it.each<InputRadioButtonGroupProps['type']>(['simple', 'table'])(
    'renders correctly for %s type',
    (type) => {
      const { container } = render(
        <InputRadioButtonGroup
          name="example"
          label="Example of Label"
          value="example"
          options={options}
          setFieldValue={() => {}}
          type={type}
        />
      );

      expect(container).toMatchSnapshot();
    }
  );

  it('renders with label', () => {
    render(
      <InputRadioButtonGroup
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
      <InputRadioButtonGroup
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

  it('renders a disabled option', () => {
    const disabledOption: InputRadioButtonGroupOption[] = [
      {
        label: 'Disabled',
        value: 'disabled',
        disabled: true,
      },
    ];

    render(
      <InputRadioButtonGroup
        name="example"
        label="Example"
        value="another example"
        options={disabledOption}
        setFieldValue={() => {}}
      />
    );

    expect(screen.getByLabelText('Disabled')).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders all options disabled when group is disabled', () => {
    render(
      <InputRadioButtonGroup
        name="example"
        label="Example"
        value="another example"
        options={options}
        disabled
        setFieldValue={() => {}}
      />
    );

    expect(screen.getByLabelText('This is a label')).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByLabelText('This is another label')).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders a description', () => {
    render(
      <InputRadioButtonGroup
        name="example"
        label="Example"
        description="A very descriptive description"
        value="another example"
        options={options}
        setFieldValue={() => {}}
      />
    );

    expect(screen.getByText('A very descriptive description')).toBeInTheDocument();
  });

  it('calls onChange when value changes', () => {
    const mockedSetFieldValue = jest.fn();
    render(
      <InputRadioButtonGroup
        name="example"
        label="Example of Label"
        value={options[0].value}
        options={options}
        setFieldValue={mockedSetFieldValue}
      />
    );
    const secondOption = screen.getByLabelText('This is another label');

    expect(mockedSetFieldValue).toHaveBeenCalledTimes(0);

    fireEvent.click(secondOption);

    expect(mockedSetFieldValue).toHaveBeenCalledTimes(1);
    expect(mockedSetFieldValue).toHaveBeenCalledWith('example', 'another example');
  });

  it('sets the radio button value using ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<InputRadioButtonGroup ref={ref} name="example" label="Example" options={options} />);
    if (ref.current) {
      ref.current.value = 'example';
    }
    expect(screen.getByLabelText('Example')).toHaveValue('example');
  });
});
