import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { ConfirmationModal, ConfirmationModalProps } from './ConfirmationModal';
import IconBadge from '../IconBadge';
import { InboxOutIcon } from '../Icons';
import Button from '../Button';

export default {
  component: ConfirmationModal,
  subcomponents: {
    Header: ConfirmationModal.Header,
    Title: ConfirmationModal.Title,
    SubTitle: ConfirmationModal.SubTitle,
    Image: ConfirmationModal.Image,
    Footer: ConfirmationModal.Footer,
  },
  title: 'Design System/Modal/ConfirmationModal',
} as Meta<ConfirmationModalProps>;

export const Default: Story<ConfirmationModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(Boolean(args.open));

  const handleClose = () => {
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

      <ConfirmationModal {...args} open={isOpen} onClose={handleClose}>
        <ConfirmationModal.Header>
          <ConfirmationModal.Image>
            <IconBadge type="info">
              <InboxOutIcon />
            </IconBadge>
          </ConfirmationModal.Image>
          <ConfirmationModal.Title>Occaecat Lorem commodo</ConfirmationModal.Title>
          <ConfirmationModal.SubTitle>Are you sure you want to confirm?</ConfirmationModal.SubTitle>
        </ConfirmationModal.Header>
        <ConfirmationModal.Footer>
          <Button color="secondary" variant="outlined" size="md" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" variant="contained" size="md" onClick={handleClose}>
            Submit
          </Button>
        </ConfirmationModal.Footer>
      </ConfirmationModal>
    </>
  );
};
Default.args = {
  open: false,
};

export const Centered: Story<ConfirmationModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(Boolean(args.open));

  const handleClose = () => {
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

      <ConfirmationModal {...args} open={isOpen} onClose={handleClose}>
        <ConfirmationModal.Header centered onClose={handleClose}>
          <ConfirmationModal.Image>
            <IconBadge type="info">
              <InboxOutIcon />
            </IconBadge>
          </ConfirmationModal.Image>
          <ConfirmationModal.Title>Occaecat Lorem commodo</ConfirmationModal.Title>
          <ConfirmationModal.SubTitle>Are you sure you want to confirm?</ConfirmationModal.SubTitle>
        </ConfirmationModal.Header>
        <ConfirmationModal.Footer centered>
          <Button color="secondary" variant="outlined" size="md" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" variant="contained" size="md" onClick={handleClose}>
            Submit
          </Button>
        </ConfirmationModal.Footer>
      </ConfirmationModal>
    </>
  );
};

Centered.args = {
  open: false,
};
