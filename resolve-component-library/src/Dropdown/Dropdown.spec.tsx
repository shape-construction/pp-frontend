import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { Dropdown } from './Dropdown';
import userEvent from '@testing-library/user-event';
import createMatchMedia from '../tests/create-match-media';
import { XIcon } from '../Icons/solid';

describe('Dropdown', () => {
  describe.each([
    ['large', 1024],
    ['small', 620],
  ])('when screen is %s', (_, screenSize) => {
    beforeEach(() => {
      window.matchMedia = createMatchMedia(screenSize);
    });

    it('renders the dropdown button', () => {
      render(
        <Dropdown
          button={<button type="button">Click me</button>}
          items={
            <>
              <Dropdown.Item>First option</Dropdown.Item>
              <Dropdown.Item>Second option</Dropdown.Item>
            </>
          }
        />
      );

      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('opens the content when clicking on the dropdown button', async () => {
      render(
        <Dropdown
          button={<button type="button">Click me</button>}
          items={
            <>
              <Dropdown.Item>First option</Dropdown.Item>
              <Dropdown.Item>Second option</Dropdown.Item>
            </>
          }
        />
      );

      userEvent.click(screen.getByRole('button', { name: 'Click me' }));

      expect(await screen.findByRole('menuitem', { name: 'First option' })).toBeVisible();
      expect(screen.getByRole('menuitem', { name: 'Second option' })).toBeVisible();
    });

    it('invokes the correspondent onClick when clicking in one of the options', () => {
      const onClickSpy = jest.fn();
      render(
        <Dropdown
          button={<button type="button">Click me</button>}
          items={
            <>
              <Dropdown.Item onClick={onClickSpy}>First option</Dropdown.Item>
              <Dropdown.Item>Second option</Dropdown.Item>
            </>
          }
        />
      );

      userEvent.click(screen.getByRole('button', { name: 'Click me' }));
      userEvent.click(screen.getByRole('menuitem', { name: 'First option' }));

      expect(onClickSpy).toHaveBeenCalled();
    });

    it('closes the dropdown when clicking in one of the options ', () => {
      render(
        <Dropdown
          button={<button type="button">Click me</button>}
          items={
            <>
              <Dropdown.Item>First option</Dropdown.Item>
              <Dropdown.Item>Second option</Dropdown.Item>
            </>
          }
        />
      );
      userEvent.click(screen.getByRole('button', { name: 'Click me' }));

      userEvent.click(screen.getByRole('menuitem', { name: 'First option' }));

      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('renders a disabled dropdown item when disable prop is true', async () => {
      render(
        <Dropdown
          button={<button type="button">Click me</button>}
          items={
            <>
              <Dropdown.Item>First option</Dropdown.Item>
              <Dropdown.Item disabled>Second option</Dropdown.Item>
            </>
          }
        />
      );

      userEvent.click(screen.getByRole('button', { name: 'Click me' }));

      expect(await screen.findByRole('menuitem', { name: 'First option' })).not.toHaveAttribute(
        'aria-disabled',
        'true'
      );
      expect(await screen.findByRole('menuitem', { name: 'Second option' })).toHaveAttribute(
        'aria-disabled',
        'true'
      );
    });

    it('renders with icon', async () => {
      render(
        <Dropdown
          button={<button type="button">Click me</button>}
          items={
            <>
              <Dropdown.Item>First option</Dropdown.Item>
              <Dropdown.Item icon={XIcon}>Cross option</Dropdown.Item>
            </>
          }
        />
      );

      userEvent.click(screen.getByRole('button', { name: 'Click me' }));

      expect(await screen.findByRole('menuitem', { name: /Cross option/ })).toBeInTheDocument();
      expect(screen.getByLabelText('dropdown-item-icon')).toBeInTheDocument();
    });

    it('renders with end adornment', async () => {
      render(
        <Dropdown
          button={<button type="button">Click me</button>}
          items={
            <>
              <Dropdown.Item endAdornment={<>end adornment</>}>First option</Dropdown.Item>
            </>
          }
        />
      );

      userEvent.click(screen.getByRole('button', { name: 'Click me' }));

      const menuItem = await screen.findByRole('menuitem', { name: /First option/ });
      expect(within(menuItem).getByText('end adornment')).toBeInTheDocument();
    });
  });
});
