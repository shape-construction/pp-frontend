import { ComponentStory } from '@storybook/react';
import React, { FC } from 'react';
// eslint-disable-next-line import/namespace
import * as mainIcons from '.';
import * as solid from './solid';
import * as outline from './outline';
import * as filesExtensions from './FilesExtensions';

export default {
  title: 'Design System/Icons',
};

const Template: ComponentStory<any> = (args) => {
  const { icons } = args;

  return (
    <div className="grid grid-cols-1 flex-wrap sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Object.keys(icons).map((name) => {
        const Icon: FC<React.ComponentProps<'svg'>> = icons[name];

        return (
          <div key={name} className="flex flex-row items-center gap-4 p-4">
            <Icon height={20} width={20} />
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export const Standard = Template.bind({});
Standard.args = { icons: mainIcons };

export const DoubleCircleIcon = () => (
  <div className="grid grid-cols-2 text-blue-400">
    {[false, true].map((selected) => (
      <mainIcons.DoubleCircleIcon key={String(selected)} selected={selected} />
    ))}
  </div>
);

export const Solid = Template.bind({});
Solid.args = { icons: solid };

export const Outline = Template.bind({});
Outline.args = { icons: outline };

export const FilesExtensions = Template.bind({});
FilesExtensions.args = { icons: filesExtensions };
