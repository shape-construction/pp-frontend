import React, { useState } from 'react';
import { Field, FieldProps } from 'formik';
import { Meta, Story } from '@storybook/react';
import { OverlayWithForm, OverlayWithFormProps } from './OverlayWithForm';
import InputText from '../InputText';
import Button from '../Button';

export default {
  component: OverlayWithForm,
  title: 'Design System/Overlays/OverlayWithForm',
  argTypes: { formProps: { onSubmit: { action: 'Form submitted!' } } },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: '500px',
    },
  },
} as Meta<OverlayWithFormProps>;

const Template: Story<OverlayWithFormProps & { fieldsNo: number }> = ({
  fieldsNo = 2,
  ...args
}) => {
  const [open, setOpen] = useState(true);

  const closeOverlay = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="primary" variant="contained" size="md" onClick={() => setOpen(!open)}>
        Open OverlayWithForm
      </Button>
      {/* Actual OverlayWithForm code 👇🏼 */}
      <OverlayWithForm
        {...args}
        open={open}
        closeOverlay={closeOverlay}
        formProps={{ ...args.formProps, onSubmit: closeOverlay }}
      >
        {/* OverlayWithForm content 👇🏼 */}
        {new Array(fieldsNo).fill(null).map((_, idx) => (
          <Field key={`example-${idx}`} name={`example-${idx}`}>
            {({ field, meta }: FieldProps) => (
              <InputText label={`Example ${idx}`} {...field} {...meta} />
            )}
          </Field>
        ))}
      </OverlayWithForm>
    </>
  );
};

export const Defaults = Template.bind({});
Defaults.args = {
  title: "I'm on the center..",
  subTitle: '... of the screen!',
  formProps: {
    onSubmit: () => {},
    initialValues: {
      example: 'Value',
    },
  },
};

export const MultipleFields = Template.bind({});
MultipleFields.args = {
  fieldsNo: 7,
  title: 'I have lots of fields',
  subTitle: 'and my content overflows..',
  formProps: {
    onSubmit: () => {},
    initialValues: {
      example: 'Value',
    },
  },
};

export const CustomFooter = Template.bind({});
CustomFooter.args = {
  title: 'I have a custom footer',
  subTitle: '...below!',
  formProps: {
    onSubmit: () => {},
    initialValues: {
      example: 'Value',
    },
  },
  footer: (
    <>
      <Button color="primary" variant="contained" size="md" type="submit">
        Custom Button
      </Button>
    </>
  ),
};
