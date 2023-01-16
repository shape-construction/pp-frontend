import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';
import { ChevronDownIcon } from '../Icons/solid';
import Button from '../Button';

export default {
  title: 'Design System/List/ListBox',
  component: ListBox,
  subcomponents: {
    Option: ListBox.Option,
  },
} as ComponentMeta<typeof ListBox>;

const options = [
  { name: 'Option 1' },
  { name: 'Option 2' },
  { name: 'Option 3' },
  { name: 'Option 4' },
  { name: 'Option 5', description: 'Description example' },
];

const Template: ComponentStory<typeof ListBox> = (args) => {
  const [selected, setSelected] = useState(args.selected);
  return <ListBox {...args} selected={selected} onChange={setSelected} />;
};

export const Standard = Template.bind({});
Standard.args = {
  selected: options[0],
  children: options.map((option) => <ListBox.Option key={option.name} option={option} />),
};

export const WithSelectedEmpty = Template.bind({});
WithSelectedEmpty.args = {
  ...Standard.args,
};

export const WithNoneOption: ComponentStory<typeof ListBox> = (args) => {
  const [selected, setSelected] = useState(args.selected);
  return (
    <ListBox selected={selected} onChange={setSelected}>
      <ListBox.Option key="none" option={{ name: 'None' }} />
      {options.map((option) => (
        <ListBox.Option key={option.name} option={option} />
      ))}
    </ListBox>
  );
};

export const DisabledOptions: ComponentStory<typeof ListBox> = (args) => {
  const [selected, setSelected] = useState(args.selected);
  return (
    <ListBox selected={selected} onChange={setSelected}>
      <ListBox.Option key="another option" disabled option={{ name: 'Option disabled' }} />
      {options.map((option) => (
        <ListBox.Option key={option.name} option={option} />
      ))}
    </ListBox>
  );
};

export const SmallScreen = Template.bind({});
SmallScreen.args = {
  ...Standard.args,
};
SmallScreen.parameters = {
  viewport: {
    defaultViewport: 'iphonese2',
  },
};

export const CustomButton = Template.bind({});
CustomButton.args = {
  ...Standard.args,
  renderButton: (props) => <ListBox.Button {...props} label="Sort" />,
};

export const AdjustPosition = Template.bind({});
AdjustPosition.args = {
  ...Standard.args,
  renderButton: () => (
    <Button color="secondary" variant="outlined" size="md" trailingIcon={ChevronDownIcon}>
      Log in
    </Button>
  ),
};
AdjustPosition.decorators = [
  (Story) => (
    <div className="flex justify-end">
      <Story />
    </div>
  ),
];

export const Grouping: ComponentStory<typeof ListBox> = (args) => {
  const [selected, setSelected] = useState(args.selected);
  return (
    <ListBox selected={selected} onChange={setSelected}>
      <ListBox.Option option={{ name: 'None' }} />
      <ListBox.Option option={{ name: 'Option 1' }} />
      <ListBox.Group label="category" />
      <ListBox.Option option={{ name: 'Category 1' }} />
      <ListBox.Option option={{ name: 'Category 2' }} />
      <ListBox.Option option={{ name: 'Category 3' }} />
      <ListBox.Group label="location" />
      <ListBox.Option option={{ name: 'Location 1' }} />
      <ListBox.Option option={{ name: 'Location 2' }} />
      <ListBox.Option option={{ name: 'Location 3' }} />
    </ListBox>
  );
};
