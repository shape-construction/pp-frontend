import React from 'react';
import { Meta } from '@storybook/react';

import { colors, sizes, variants } from '../button-config';
import { IconButton, IconButtonProps } from './IconButton';
import { PlusIcon } from '@heroicons/react/24/solid';

const pseudoStates = ['default', 'hover', 'focus', 'disabled'];

export default {
  component: IconButton,
  subcomponents: {},
  title: 'Design System/IconButton',
} as Meta<IconButtonProps>;

export const Colors = (args: IconButtonProps) => (
  <div className="flex flex-row items-center gap-4">
    {colors.map((color) => (
      <IconButton
        key={color}
        {...args}
        color={color}
        variant="contained"
        size="md"
        icon={PlusIcon}
      />
    ))}
  </div>
);

export const Sizes = (args: IconButtonProps) => (
  <div className="flex flex-col gap-4">
    {colors.map((color) => (
      <div className="flex flex-row items-center gap-4" key={color}>
        {sizes.map((size) => (
          <IconButton
            key={`${color}-${size}`}
            {...args}
            size={size}
            color={color}
            variant="contained"
            icon={PlusIcon}
          />
        ))}
      </div>
    ))}
  </div>
);

export const Variants = (args: IconButtonProps) => (
  <div className="flex flex-col gap-4">
    {colors.map((color) => (
      <div className="flex flex-row items-center gap-4" key={color}>
        {variants.map((variant) => (
          <IconButton
            key={`${color}-${variant}`}
            {...args}
            variant={variant}
            color={color}
            size="md"
            icon={PlusIcon}
          />
        ))}
      </div>
    ))}
  </div>
);

export const Disabled = (args: IconButtonProps) => (
  <div className="flex flex-row items-center gap-4">
    {colors.map((color) => (
      <IconButton
        key={color}
        {...args}
        color={color}
        variant="contained"
        size="md"
        icon={PlusIcon}
        disabled
      />
    ))}
  </div>
);

export const All = (args: IconButtonProps) => (
  <div className="flex flex-row flex-nowrap items-center gap-16">
    {colors.map((color) => (
      <div key={color} className="flex flex-col">
        {variants.map((variant) => (
          <div key={color + variant}>
            {pseudoStates.map((state) => (
              <div key={color + variant + state} className="m-4 flex items-center gap-4">
                {sizes.map((size) => (
                  <IconButton
                    key={`${color}-${variant}-${size}`}
                    {...args}
                    color={color}
                    variant={variant}
                    size={size}
                    disabled={state === 'disabled'}
                    id={state}
                    icon={PlusIcon}
                  />
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
