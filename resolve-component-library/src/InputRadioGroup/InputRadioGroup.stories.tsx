import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Formik } from 'formik';
import { action } from '@storybook/addon-actions';
import { InputRadioGroup, InputRadioGroupProps } from './InputRadioGroup';

export default {
  title: 'Design System/Input/InputRadioGroup',
  component: InputRadioGroup,
} as Meta<InputRadioGroupProps>;

const options = [
  { label: 'example', value: 'example', description: 'This is a description' },
  {
    label: 'another example',
    value: 'another example',
    description: 'And this is another one',
  },
];

export const Default = () => {
  const [value, setValue] = useState(options[0].value);

  function changeValue(name: string, val: string) {
    setValue(val);
  }

  return (
    <InputRadioGroup
      name="field"
      options={options}
      value={value}
      setFieldValue={(name, val) => {
        changeValue(name, val);
        action('setFieldValue')({ name, value: val });
      }}
    />
  );
};

export const WithFormik = () => (
  <Formik
    initialValues={{ field: options[1].value }}
    onSubmit={(result) => {
      action('onSubmit')(result);
    }}
  >
    {({ values, setFieldValue, submitForm }) => (
      <form>
        <InputRadioGroup
          name="field"
          options={options}
          value={values.field}
          onChange={(res) => action('onChange')(res)}
          setFieldValue={setFieldValue}
        />
        <div className="mt-2">
          <button type="button" onClick={submitForm}>
            Submit
          </button>
        </div>
      </form>
    )}
  </Formik>
);

export const WithErrors = () => (
  <InputRadioGroup
    name="field"
    options={options}
    value={options[0].value}
    onChange={(res) => action('onChange')(res)}
    setFieldValue={() => {}}
    error="error"
  />
);
