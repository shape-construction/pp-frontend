import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SplitScreen, SplitScreenProps } from './SplitScreen';

import { LogInProps } from '../LogIn/LogIn';
import { Default as LogIn } from '../LogIn/LogIn.stories';

export default {
  title: 'Screens/SplitScreen',
  component: SplitScreen,
  subcomponents: {
    LeftPanel: SplitScreen.LeftPanel,
    RightPanel: SplitScreen.RightPanel,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<SplitScreenProps>;

const Template: Story<SplitScreenProps> = (args) => (
  <SplitScreen {...args}>
    <SplitScreen.LeftPanel>Example Content</SplitScreen.LeftPanel>
    <SplitScreen.RightPanel>
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://via.placeholder.com/150"
        alt="title of the example"
      />
    </SplitScreen.RightPanel>
  </SplitScreen>
);

export const Standard = Template.bind({});
Standard.args = {};

export const WithLogIn: Story<SplitScreenProps> = () => (
  <SplitScreen>
    <SplitScreen.LeftPanel>
      <LogIn {...(LogIn.args as LogInProps)} />
    </SplitScreen.LeftPanel>
    <SplitScreen.RightPanel className="bg-indigo-500 lg:flex">
      <img
        className="absolute h-full w-full object-none object-center"
        src="https://via.placeholder.com/150"
        alt="title of the example"
      />
    </SplitScreen.RightPanel>
  </SplitScreen>
);
