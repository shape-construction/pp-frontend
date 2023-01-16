import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { FullScreenModal, FullScreenModalProps } from './FullScreenModal';
import Button from '../Button';

export default {
  component: FullScreenModal,
  subcomponents: {
    Header: FullScreenModal.Header,
    Title: FullScreenModal.Title,
    Content: FullScreenModal.Content,
    Footer: FullScreenModal.Footer,
  },
  title: 'Design System/Modal/FullScreenModal',
} as Meta<FullScreenModalProps>;

export const Default: Story<FullScreenModalProps> = (args) => {
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

      <FullScreenModal {...args} open={isOpen} onClose={handleClose}>
        <FullScreenModal.Header onClose={handleClose}>
          <FullScreenModal.Title>Occaecat Lorem commodo</FullScreenModal.Title>
        </FullScreenModal.Header>
        <FullScreenModal.Content>
          Ex adipisicing aute pariatur do elit ea ea ullamco exercitation officia ea anim aute.
        </FullScreenModal.Content>
        <FullScreenModal.Footer>
          <Button color="secondary" size="md" variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" variant="contained" size="md" onClick={handleClose}>
            Submit
          </Button>
        </FullScreenModal.Footer>
      </FullScreenModal>
    </>
  );
};
