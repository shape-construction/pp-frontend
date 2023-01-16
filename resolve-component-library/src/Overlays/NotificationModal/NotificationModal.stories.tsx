import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { NotificationModal, NotificationModalProps } from './NotificationModal';
import Offline from '../Illustrations/Offline';

export default {
  component: NotificationModal,
  title: 'Design System/Overlays/NotificationModal',
} as Meta<NotificationModalProps>;

const Template: Story<NotificationModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return <NotificationModal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
};

export const Default = Template.bind({});
Default.args = {
  title: 'title',
  subTitle: '... on the center of the screen!',
  preTitleContent: <Offline />,
  actionText: 'Okay',
};

export const WithoutAction = Template.bind({});
WithoutAction.args = {
  title: 'title',
  subTitle: '... on the center of the screen!',
  preTitleContent: <Offline />,
};
