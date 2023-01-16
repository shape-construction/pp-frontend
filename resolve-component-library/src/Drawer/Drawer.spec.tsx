import React from 'react';
import { render, screen } from '@testing-library/react';
import { Drawer } from './Drawer';
import userEvent from '@testing-library/user-event';

describe('Drawer', () => {
  describe('Drawer header', () => {
    it('renders the title', () => {
      render(
        <Drawer open onClose={jest.fn()}>
          <Drawer.Header title="Drawer title" onClose={jest.fn()}></Drawer.Header>
        </Drawer>
      );

      expect(screen.getByRole('heading', { name: 'Drawer title' })).toBeInTheDocument();
    });

    it('renders the subtitle', () => {
      render(
        <Drawer open onClose={jest.fn()}>
          <Drawer.Header
            title="Drawer title"
            subtitle="Drawer subtitle"
            onClose={jest.fn()}
          ></Drawer.Header>
        </Drawer>
      );

      expect(screen.getByRole('heading', { name: 'Drawer subtitle' })).toBeInTheDocument();
    });

    it('does not render the subtitle when not defined', () => {
      render(
        <Drawer open onClose={jest.fn()}>
          <Drawer.Header title="Drawer title" onClose={jest.fn()}></Drawer.Header>
        </Drawer>
      );

      expect(screen.queryByRole('heading', { name: 'Drawer subtitle' })).not.toBeInTheDocument();
    });

    it('executes on close when click close button', () => {
      const spyOnClose = jest.fn();
      render(
        <Drawer open onClose={spyOnClose}>
          <Drawer.Header title="Drawer title" onClose={spyOnClose}></Drawer.Header>
        </Drawer>
      );

      userEvent.click(screen.getByRole('button', { name: /close overlay/i }));

      expect(spyOnClose).toBeCalled();
    });
  });
});
