import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Drawer, DrawerProps } from './Drawer';
import Button from '../Button';

export default {
  component: Drawer,
  subcomponents: {
    Header: Drawer.Header,
    Content: Drawer.Content,
    Footer: Drawer.Footer,
  },
  title: 'Design System/Drawer',
} as Meta<DrawerProps>;

const Template: Story<DrawerProps> = (props) => (
  <Drawer {...props} className="bg-white">
    <Drawer.Header title="Title" subtitle="Supporting text" onClose={props.onClose} />
    <Drawer.Content>
      <div className="w-[250px]">content</div>
    </Drawer.Content>
    <Drawer.Footer>
      <Button color="secondary" variant="outlined" size="md" onClick={() => props.onClose()}>
        Cancel
      </Button>
      <Button color="primary" variant="contained" size="md" onClick={() => props.onClose()}>
        Save
      </Button>
    </Drawer.Footer>
  </Drawer>
);

export const Default = Template.bind({});
Default.args = {
  open: true,
  placement: 'left',
};

export const Placement: Story<DrawerProps> = (props) => {
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');
  const [sidebarOpen, setSidebarOpen] = useState(props.open);

  const onClose = () => {
    setSidebarOpen(false);
  };
  const onOpen = (placementValue: DrawerProps['placement']) => {
    setPlacement(placementValue);
    setSidebarOpen(true);
  };

  return (
    <div>
      <div className="flex w-full flex-row items-center justify-center gap-10">
        <Button color="primary" variant="contained" size="md" onClick={() => onOpen('bottom')}>
          bottom
        </Button>
        <Button color="primary" variant="contained" size="md" onClick={() => onOpen('top')}>
          top
        </Button>
        <Button color="primary" variant="contained" size="md" onClick={() => onOpen('left')}>
          left
        </Button>
        <Button color="primary" variant="contained" size="md" onClick={() => onOpen('right')}>
          right
        </Button>
      </div>
      <Template {...props} open={sidebarOpen} placement={placement} onClose={onClose} />
    </div>
  );
};
Placement.args = {
  open: false,
};
