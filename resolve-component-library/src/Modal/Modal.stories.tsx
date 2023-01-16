import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from './Modal';
import Button from '../Button';

export default {
  component: Modal,
  subcomponents: {
    Header: Modal.Header,
    Title: Modal.Title,
    SubTitle: Modal.SubTitle,
    Content: Modal.Content,
    Footer: Modal.Footer,
  },
  title: 'Factories/Modal',
} as Meta<ModalProps>;

const Template: Story<
  Omit<ModalProps, 'children'> & {
    children: (props: { onClose: ModalProps['onClose'] }) => React.ReactNode;
  }
> = ({ children, ...args }) => {
  const [isOpen, setIsOpen] = useState(Boolean(args.open));

  const handleClose: ModalProps['onClose'] = (open) => {
    args.onClose(open);
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(Boolean(args.open));
  }, [args.open]);

  return (
    <>
      <Button color="primary" variant="contained" size="md" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal {...args} open={isOpen} onClose={handleClose}>
        <Modal.Header onClose={handleClose}>
          <Modal.Title>Occaecat Lorem commodo</Modal.Title>
          <Modal.SubTitle>Pariatur dolore sit duis ut ex</Modal.SubTitle>
        </Modal.Header>
        <Modal.Content>
          Ex adipisicing aute pariatur do elit ea ea ullamco exercitation officia ea anim aute.
        </Modal.Content>
        <Modal.Footer>
          <Button color="secondary" variant="outlined" size="md" onClick={() => handleClose()}>
            Cancel
          </Button>
          <Button color="primary" variant="contained" size="md" onClick={() => handleClose()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  fullScreen: true,
};

export const Fullwidth = Template.bind({});
Fullwidth.args = {
  fullWidth: true,
};

export const Maxwidth = Template.bind({});
Maxwidth.args = {
  maxWidth: 'md',
};

export const DisableEscapeKey = Template.bind({});
DisableEscapeKey.args = {
  disableEscapeKey: true,
};

export const RoundBorders = Template.bind({});
RoundBorders.args = {
  roundBorders: true,
};

export const HeaderFooterBorders: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(Boolean(args.open));

  const handleClose: ModalProps['onClose'] = (open) => {
    args.onClose(open);
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(Boolean(args.open));
  }, [args.open]);

  return (
    <>
      <Button color="primary" variant="contained" size="md" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal {...args} open={isOpen} onClose={handleClose}>
        <Modal.Header bottomBorder onClose={handleClose}>
          <Modal.Title>Occaecat Lorem commodo</Modal.Title>
        </Modal.Header>
        <Modal.Content>
          Ex adipisicing aute pariatur do elit
          <br />
          ea ea ullamco exercitation officia ea anim aute.
          <br />
          Sed cursus turpis vitae tortor. Cras ultricies mi eu turpis hendrerit fringilla.
        </Modal.Content>
        <Modal.Footer topBorder>
          <Button color="secondary" variant="outlined" size="md" onClick={() => handleClose()}>
            Cancel
          </Button>
          <Button color="primary" variant="contained" size="md" onClick={() => handleClose()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
