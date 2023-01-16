import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ExpandablePanelProps, ExpansionPanel } from './ExpansionPanel';

export default {
  title: 'Design System/ExpansionPanel',
  component: ExpansionPanel,
  subcomponents: {
    Header: ExpansionPanel.Header,
    Content: ExpansionPanel.Content,
  },
} as Meta<ExpandablePanelProps>;

const ExpandablePanelTemplate: Story<ExpandablePanelProps> = (args: any) => (
  <ExpansionPanel {...args}>
    <ExpansionPanel.Header>This is the header!</ExpansionPanel.Header>
    <ExpansionPanel.Content>And this is the content!</ExpansionPanel.Content>
  </ExpansionPanel>
);

export const Default = ExpandablePanelTemplate.bind({});

export const OpenByDefault = ExpandablePanelTemplate.bind({});
OpenByDefault.args = {
  defaultOpen: true,
};
