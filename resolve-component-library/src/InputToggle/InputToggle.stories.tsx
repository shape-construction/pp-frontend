import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InputToggle } from './InputToggle';

export default {
  title: 'Design System/Input/InputToggle',
  component: InputToggle,
} as ComponentMeta<typeof InputToggle>;

const TemplateInputSelect: ComponentStory<typeof InputToggle> = (args) => <InputToggle {...args} />;

export const Unchecked = TemplateInputSelect.bind({});
Unchecked.args = {};

export const Checked = TemplateInputSelect.bind({});
Checked.args = {
  checked: true,
};

export const SmallUnchecked = TemplateInputSelect.bind({});
SmallUnchecked.args = {
  small: true,
};

export const SmallChecked = TemplateInputSelect.bind({});
SmallChecked.args = {
  small: true,
  checked: true,
};

export const WithIcon = TemplateInputSelect.bind({});
WithIcon.args = {
  withIcon: true,
};

export const Disabled = TemplateInputSelect.bind({});
Disabled.args = {
  disabled: true,
};
