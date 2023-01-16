import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Popover, PopoverProps } from './Popover';
import Button from '../Button';

export default {
  title: 'Design System/Overlays/Popover',
  component: Popover,
} as Meta<PopoverProps>;

const PopoverTemplate: Story<PopoverProps> = (args) => (
  <div className="relative flex flex-col">
    {[...Array(50)].map((item, index) => (
      <div key={`info-modal-item-${item}`}>{`Lorem ipsum dolor sit amet ${index}`}</div>
    ))}
    <div className="absolute top-5 right-5 z-popover">
      <Popover {...args} content={<div>This is the popover content</div>} placement="bottom-end">
        <Button color="primary" variant="contained" size="md" type="submit">
          Open popover
        </Button>
      </Popover>
    </div>
  </div>
);

export const OnBiggerScreens = PopoverTemplate.bind({});

export const OnSmallerScreens = PopoverTemplate.bind({});
OnSmallerScreens.parameters = {
  viewport: {
    defaultViewport: 'iphonese2',
  },
};

export const WithStaticPanel = PopoverTemplate.bind({});
WithStaticPanel.args = {
  open: true,
  isStatic: true,
};

export const WithButtonClickActionPanel = PopoverTemplate.bind({});
WithButtonClickActionPanel.argTypes = {
  onClickButton: { action: 'button clicked!' },
};
