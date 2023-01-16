import React from 'react';
import { Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { colors, sizes, variants, widths } from './button-config';
import { MinusCircleIcon, PlusCircleIcon } from '../Icons/solid';

const pseudoStates = ['default', 'hover', 'focus', 'disabled'];

export default {
  component: Button,
  subcomponents: {},
  title: 'Design System/Button',
} as Meta<ButtonProps>;

export const Colors = (args: ButtonProps) => (
  <div className="flex flex-row items-center gap-4">
    {colors.map((color) => (
      <Button key={color} {...args} color={color} variant="contained" size="md">
        {color}
      </Button>
    ))}
  </div>
);

export const Sizes = (args: ButtonProps) => (
  <div className="flex flex-col gap-4">
    {colors.map((color) => (
      <div className="flex flex-row items-center gap-4" key={color}>
        {sizes.map((size) => (
          <Button key={`${color}-${size}`} {...args} size={size} color={color} variant="contained">
            {size}
          </Button>
        ))}
      </div>
    ))}
  </div>
);

export const Variants = (args: ButtonProps) => (
  <div className="flex flex-col gap-4">
    {colors.map((color) => (
      <div className="flex flex-row items-center gap-4" key={color}>
        {variants.map((variant) => (
          <Button key={`${color}-${variant}`} {...args} variant={variant} color={color} size="md">
            {variant}
          </Button>
        ))}
      </div>
    ))}
  </div>
);

export const Disabled = (args: ButtonProps) => (
  <div className="flex flex-row items-center gap-4">
    {colors.map((color) => (
      <Button key={color} {...args} color={color} variant="contained" size="md" disabled>
        {color}
      </Button>
    ))}
  </div>
);

export const Width = (args: ButtonProps) => (
  <div className="flex w-96 flex-col gap-4">
    {colors.map((color) => (
      <div className="flex flex-row items-center gap-4" key={color}>
        {widths.map((width) => (
          <Button
            key={`${color}-${width}`}
            {...args}
            fullWidth={width === 'full'}
            color={color}
            variant="contained"
            size="md"
          >
            {width}
          </Button>
        ))}
      </div>
    ))}
  </div>
);

export const Icons = (args: ButtonProps) => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-row items-center gap-4">
      {colors.map((color) => (
        <Button
          key={color}
          {...args}
          color={color}
          leadingIcon={PlusCircleIcon}
          variant="contained"
          size="md"
        >
          {color}
        </Button>
      ))}
    </div>
    <div className="flex flex-row items-center gap-4">
      {colors.map((color) => (
        <Button
          key={color}
          {...args}
          color={color}
          trailingIcon={MinusCircleIcon}
          variant="contained"
          size="md"
        >
          {color}
        </Button>
      ))}
    </div>
    <div className="flex flex-row items-center gap-4">
      {colors.map((color) => (
        <Button
          key={color}
          {...args}
          color={color}
          leadingIcon={PlusCircleIcon}
          trailingIcon={MinusCircleIcon}
          variant="contained"
          size="md"
        >
          {color}
        </Button>
      ))}
    </div>
  </div>
);

export const All = (args: ButtonProps) => (
  <div className="flex flex-row flex-nowrap items-center gap-16">
    {colors.map((color) => (
      <div key={color} className="flex flex-col">
        {variants.map((variant) => (
          <div key={color + variant}>
            {pseudoStates.map((state) => (
              <div key={color + variant + state} className="m-4 flex items-center gap-4">
                {sizes.map((size) => (
                  <Button
                    key={`${color}-${variant}-${size}`}
                    {...args}
                    color={color}
                    variant={variant}
                    size={size}
                    disabled={state === 'disabled'}
                    id={state}
                  >
                    Button
                  </Button>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    ))}
  </div>
);
All.parameters = {
  pseudo: {
    hover: '#hover',
    focus: '#focus',
  },
};
