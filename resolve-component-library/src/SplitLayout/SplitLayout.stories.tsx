import React, { FC, ReactNodeArray, ComponentProps, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { SplitLayout, SplitLayoutProps } from './SplitLayout';
import { useLayout } from '../hooks';

export default {
  title: 'Screens/SplitLayout',
  component: SplitLayout,
  subcomponents: {
    Panel: SplitLayout.Panel,
  },
  decorators: [(Children) => <div style={{ height: '80vh' }}>{Children()}</div>],
} as Meta<SplitLayoutProps>;

// Used only to access LayoutContext values (setExpaded method)
const TemplateWithContext: FC<ComponentProps<typeof SplitLayout.Panel>> = ({
  children,
  ...props
}) => {
  const { expandedPanel, setExpandedPanel } = useLayout();

  return (
    <SplitLayout.Panel {...props}>
      <div className="flex flex-col">
        {children}
        <button
          type="button"
          className="border border-r-2 w-40"
          aria-label="panel-action"
          onClick={() => setExpandedPanel(expandedPanel !== props.index ? props.index : undefined)}
        >
          click me
        </button>
      </div>
    </SplitLayout.Panel>
  );
};

const Template: Story<SplitLayoutProps> = (args) => {
  const [expandedPanel, setExpandedPanel] = useState<number>();
  return <SplitLayout expandedPanel={expandedPanel} {...args} onSetLayout={setExpandedPanel} />;
};

export const Row: Story<SplitLayoutProps> = Template.bind({});
Row.args = {
  direction: 'row',
  children: [
    <SplitLayout.Panel key="panel-0" className="bg-rose-300 flex-1">
      first panel (flex)
    </SplitLayout.Panel>,
    <SplitLayout.Panel key="panel-1" className="bg-violet-300 flex-1">
      second panel (flex)
    </SplitLayout.Panel>,
  ],
};

export const Column: Story<SplitLayoutProps> = Template.bind({});
Column.args = {
  ...Row.args,
  direction: 'col',
};

export const ThreePanels: Story<SplitLayoutProps> = Template.bind({});
ThreePanels.args = {
  ...Row.args,
  children: [
    ...(Row.args.children as ReactNodeArray),
    <SplitLayout.Panel key="panel-2" className="bg-blue-300 w-5/12">
      third panel (5/12)
    </SplitLayout.Panel>,
  ],
};

export const ExpandPanelOnClick: Story<SplitLayoutProps> = Template.bind({});
ExpandPanelOnClick.args = {
  ...Row.args,
  children: [
    <TemplateWithContext key="panel-0" className="bg-rose-300 w-4/12">
      first panel (4/12)
    </TemplateWithContext>,
    <SplitLayout.Panel key="panel-1" className="bg-violet-300 w-8/12">
      second panel (8/12)
    </SplitLayout.Panel>,
  ],
};

export const WithFirstActivePanel: Story<SplitLayoutProps> = Template.bind({});
WithFirstActivePanel.args = {
  ...Row.args,
  expandedPanel: 0,
};
