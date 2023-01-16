import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ActionPanel, ActionPanelProps } from './ActionPanel';
import Button from '../Button';

export default {
  title: 'Design System/ActionPanel',
  component: ActionPanel,
} as Meta<ActionPanelProps>;

const TemplateActionPanel: Story<ActionPanelProps> = (args) => <ActionPanel {...args} />;

export const Default = TemplateActionPanel.bind({});
Default.args = {
  content: 'Hello, world!',
};

export const RejectApprove = TemplateActionPanel.bind({});
RejectApprove.args = {
  content: (
    <>
      <strong>Leslie Alexander</strong> marked the issue as complete. It&apos;s with you for final
      approval.
    </>
  ),
  actions: (
    <>
      <Button color="danger" variant="contained" size="md">
        Reject
      </Button>
      <Button color="success" variant="contained" size="md">
        Approve
      </Button>
    </>
  ),
};
