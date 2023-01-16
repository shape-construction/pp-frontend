import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { DropdownItem } from './DropdownItem';
import { TrashIcon, XIcon } from '../Icons/solid';
import Button from '../Button';

export default {
  component: Dropdown,
  subcomponents: {
    Item: DropdownItem,
  },
  title: 'Design System/Dropdown',
} as Meta;

const Template: Story<{ onItemClick: () => void }> = ({ onItemClick }) => (
  <div className="flex w-full justify-center">
    <Dropdown
      button={
        <Button color="secondary" variant="outlined" size="md">
          Click me
        </Button>
      }
      items={
        <>
          <Dropdown.Item onClick={onItemClick}>First option</Dropdown.Item>
          <Dropdown.Item icon={TrashIcon} onClick={onItemClick}>
            With Icon
          </Dropdown.Item>
          <Dropdown.Item disabled onClick={onItemClick}>
            Disabled option
          </Dropdown.Item>
          <Dropdown.Item icon={XIcon} onClick={onItemClick} color="danger">
            Danger variant
          </Dropdown.Item>
          <Dropdown.Item icon={XIcon} onClick={onItemClick} color="danger">
            Danger variant
          </Dropdown.Item>
          <Dropdown.Item
            icon={XIcon}
            onClick={onItemClick}
            endAdornment={<TrashIcon className="h-5 w-5" />}
          >
            End adornment
          </Dropdown.Item>
        </>
      }
    />
  </div>
);

export const Default = Template.bind({});
Default.argTypes = {
  onItemClick: { action: 'item clicked' },
};

export const SmallScreen = Template.bind({});
SmallScreen.argTypes = {
  ...Default.argTypes,
};
SmallScreen.parameters = {
  viewport: {
    defaultViewport: 'iphonese2',
  },
};
