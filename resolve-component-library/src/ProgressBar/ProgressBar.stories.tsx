import React from 'react';
import { ComponentMeta } from '@storybook/react';
import ProgressBar, {
  ProgressBarProps,
  ProgressBarActiveColor,
  ProgressBarSize,
} from './ProgressBar';

const progressBarColors: ProgressBarActiveColor[] = ['primary', 'success', 'warning', 'danger'];
const progressBarSizes: ProgressBarSize[] = ['small', 'medium', 'large'];

export default {
  title: 'Design System/ProgressBar',
  component: ProgressBar,
  argTypes: {
    percentage: {
      defaultValue: 30,
    },
  },
} as ComponentMeta<typeof ProgressBar>;

export const Default = (args: ProgressBarProps) => <ProgressBar {...args} />;

export const Colors = (args: ProgressBarProps) => (
  <div className="flex flex-col gap-4">
    {progressBarColors.map((color, index) => (
      <div key={index} className="flex flex-col gap-1">
        <span className="dark:text-white">{color}</span>
        <ProgressBar {...args} color={color} percentage={index * 10 + 20} />
      </div>
    ))}
  </div>
);
Colors.argTypes = {
  percentage: {
    control: false,
  },
};

export const Sizes = (args: ProgressBarProps) => (
  <div className="flex flex-col gap-4">
    {progressBarSizes.map((size, index) => (
      <div key={index} className="flex flex-col gap-1">
        <span className="dark:text-white">{size}</span>
        <ProgressBar {...args} size={size} percentage={index * 10 + 20} />
      </div>
    ))}
  </div>
);
Sizes.argTypes = {
  percentage: {
    control: false,
  },
};

export const WithLabel = (args: ProgressBarProps) => <ProgressBar {...args} label="Percentage" />;

export const DarkMode = (args: ProgressBarProps) => (
  <div className="dark bg-gray-800 p-10">
    <ProgressBar {...args} label="Percentage" />
  </div>
);
