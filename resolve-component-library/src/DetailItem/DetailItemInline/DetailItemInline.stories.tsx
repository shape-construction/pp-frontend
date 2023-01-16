import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DetailItemInline, DetailItemInlineProps } from '.';

export default {
  title: 'Design System/Details/DetailItemInline',
  component: DetailItemInline,
} as Meta<DetailItemInlineProps>;

const DetailItemInlinePanel: Story<DetailItemInlineProps> = (args) => (
  <DetailItemInline {...args} />
);

export const Default = DetailItemInlinePanel.bind({});
Default.args = {
  label: 'Label',
  value: 'Value',
};
