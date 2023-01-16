import React, { FC, MouseEventHandler } from 'react';
import { RadioGroup } from '@headlessui/react';

import { Color, colors as defaultColors } from '../colors';
import { Color as ColorTool } from '../Tools';
import { ToolPicker } from './ToolPicker';

export type ColorPickerProps = {
  /**
   * The list of colors that the picker will be able to select from.
   * They should match colors known by Tailwind
   */
  colors?: Color[];
  /**
   * Color from the colors list. The color of the icon
   */
  selectedColor: Color;
  /**
   * Handler attached to the ColorTool button
   */
  onClick?: MouseEventHandler;
  /**
   * Handler to run when the color is selected from the picker
   */
  onSelect: (color: Color) => void;
};

export const ColorPicker: FC<ColorPickerProps> = ({
  colors = defaultColors,
  selectedColor,
  onSelect,
  ...props
}) => {
  if (!colors.includes(selectedColor)) throw Error('The selected color is not defined in colors');

  return (
    <ToolPicker
      button={<ColorTool color={selectedColor} selected {...props} />}
      panel={({ close }) => (
        <RadioGroup
          value={selectedColor}
          onChange={(color: Color) => {
            onSelect(color);
            close();
          }}
        >
          {colors.map((color) => {
            const isSelectedOption = selectedColor === color;

            return (
              <RadioGroup.Option key={color} value={color}>
                <ColorTool color={color} variant="text" selected={isSelectedOption} />
                <RadioGroup.Label as="p" className="sr-only">
                  {color}
                </RadioGroup.Label>
              </RadioGroup.Option>
            );
          })}
        </RadioGroup>
      )}
    />
  );
};
