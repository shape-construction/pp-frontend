import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Comment, CommentProps } from './Comment';

export default {
  title: 'Design System/Comment/Comment',
  component: Comment,
} as Meta<CommentProps>;

const CommentTemplate: Story<CommentProps> = (args) => <Comment {...args} />;

export const Default = CommentTemplate.bind({});
Default.args = {
  user: {
    id: 'user_id',
    firstName: 'John',
    name: 'John Doe',
    avatarUrl: 'https://place-hold.it/300',
  },
  content:
    'Mauris a nulla ac ligula rhoncus ullamcorper. Mauris non metus ut ante porta suscipit non elementum nibh.' +
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse ' +
    'sed tempor orci, non ornare dolor. Aenean tincidunt a magna eu tempus. In fringilla, nibh in porta viverra, ' +
    'diam dui varius dui, at tempor tortor lectus vitae elit. Nam metus nunc, vulputate non neque vitae, luctus placerat augue. ' +
    'Further reading: https://portal.azure.com/#@abcd.com/resource/subscriptions/1af5caac4-7b5a-4afa-1437-2dbacf28adac/resourceGroups/' +
    'RA-KC-UQE-CDF-MFGE/providers/Microsoft.Web/sites/current/appServices',
  subheader: 'just now',
};

export const SmallContent = CommentTemplate.bind({});
SmallContent.args = {
  ...Default.args,
  content: 'Just that.',
};

export const Editing = CommentTemplate.bind({});
Editing.args = {
  ...Default.args,
  isEditing: true,
};

export const WithHTMLContent = CommentTemplate.bind({});
WithHTMLContent.args = {
  ...Default.args,
  content: "<button type='button' class='bg-indigo-500 text-white rounded p-2'>Click me</button>",
};
