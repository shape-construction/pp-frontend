import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FileExtensionIcon, FileExtensionIconProps } from './FileExtensionIcon';

export default {
  title: 'Design System/FileExtensionIcon',
  component: FileExtensionIcon,
} as Meta<FileExtensionIconProps>;

const TemplateForgotPassword: Story<FileExtensionIconProps> = (args) => (
  <FileExtensionIcon {...args} />
);

export const Standard = TemplateForgotPassword.bind({});
Standard.args = {
  extension: 'pdf',
  width: 40,
  height: 40,
};

export const NonExistent = TemplateForgotPassword.bind({});
NonExistent.args = {
  extension: 'random',
  width: 40,
  height: 40,
};
