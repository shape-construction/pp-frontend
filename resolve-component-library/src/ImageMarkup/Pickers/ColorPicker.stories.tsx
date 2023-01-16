import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { colors, Color } from '../colors';
import { ColorPicker as ColorPickerElement } from './ColorPicker';

export default {
  title: 'Design System/Editor Markup/Pickers/Color Picker',
  component: ColorPickerElement,
  argTypes: {
    onSelect: { action: 'on select' },
  },
} as ComponentMeta<typeof ColorPickerElement>;

const Template: ComponentStory<typeof ColorPickerElement> = (props) => {
  const [selectedColor, setSelectedColor] = useState<Color>(colors[0]);

  return (
    <ColorPickerElement
      {...props}
      selectedColor={selectedColor}
      onSelect={(color) => {
        props.onSelect(color);
        setSelectedColor(color);
      }}
    />
  );
};

export const ColorPicker = Template.bind({});
