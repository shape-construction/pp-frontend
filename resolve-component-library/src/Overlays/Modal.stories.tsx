import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from './Modal';
import Check from './Illustrations/Check';
import Delete from './Illustrations/Delete';
import Button from '../Button';

export default {
  component: Modal,
  subcomponents: { Actions: Modal.Actions },
  title: 'Design System/Overlays/Modal',
} as Meta<ModalProps>;

const defaultContent = <span>This is the modal content</span>;

const Template: Story<ModalProps & { content?: ModalProps['children'] }> = ({
  content = defaultContent,
  ...args
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Button color="primary" variant="contained" size="md" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {content}
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'This has a title',
  subTitle: '... on the center of the screen!',
};

export const WithoutCloseIcon = Template.bind({});
WithoutCloseIcon.args = {
  title: "This shouldn't have a close icon",
  subTitle: 'and apparently it works',
  showCloseIcon: false,
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  title: '',
  subTitle: '',
};

export const NoContentPadding = Template.bind({});
NoContentPadding.args = {
  title: 'The title has padding',
  subTitle: 'but the body doesnt',
  noPadding: true,
};

export const InfoModal = Template.bind({});
InfoModal.args = {
  preTitleContent: <Check />,
  title: 'This is an informative modal',
  subTitle: 'with the function to inform you of something rather important!',
  alignCenter: true,
  showCloseIcon: false,
  content: null,
};

export const OverflowingContent = Template.bind({});
OverflowingContent.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
OverflowingContent.args = {
  content: (
    <>
      {new Array(13).fill(null).map((_, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <article className="round-sm border text-5xl" key={`art-${idx}`}>
          {idx}
        </article>
      ))}
      <footer className="sticky bottom-0 bg-rose-50 text-3xl">Sticky footer</footer>
    </>
  ),
};

export const NoDivider = Template.bind({});
NoDivider.args = {
  ...Default.args,
  content: <p>Some content</p>,
  withDivider: false,
};

export const WithActions = Template.bind({});
WithActions.args = {
  ...Default.args,
  preTitleContent: <Delete />,
  alignCenter: true,
  showCloseIcon: false,
  content: (
    <>
      <p>Some text in the modal</p>
      <Modal.Actions>
        <Button color="secondary" variant="outlined" size="md" fullWidth>
          Dismiss
        </Button>
        <Button color="danger" variant="contained" size="md" fullWidth>
          Delete
        </Button>
      </Modal.Actions>
    </>
  ),
  withDivider: false,
};
