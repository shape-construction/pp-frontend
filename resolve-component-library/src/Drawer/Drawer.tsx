import React from 'react';
import classNames from 'classnames';
import { Modal, ModalProps } from '../Modal';
import { DrawerFooter } from './components/DrawerFooter';
import { DrawerHeader } from './components/DrawerHeader';
import { DrawerContent } from './components/DrawerContent';

export type Placement = 'left' | 'right' | 'bottom' | 'top';
const transitions: Record<Placement, ModalProps['transition']> = {
  left: 'left-to-right',
  bottom: 'bottom-to-top',
  right: 'right-to-left',
  top: 'top-to-bottom',
};

type Components = {
  Header: typeof DrawerHeader;
  Title: typeof Modal.Title;
  Subtitle: typeof Modal.SubTitle;
  Content: typeof DrawerContent;
  Footer: typeof DrawerFooter;
};

export type DrawerProps = Pick<
  ModalProps,
  'initialFocus' | 'open' | 'onClose' | 'className' | 'maxWidth' | 'fullWidth' | 'fullScreen'
> & {
  children: React.ReactNode;
  /**
   * Side from which the drawer will be displayed.
   */
  placement?: Placement;
  /**
   * Enables transition when displaying the drawer
   */
  transition?: boolean;
};

export const Drawer: React.FC<DrawerProps> & Components = ({
  children,
  placement = 'left',
  transition = true,
  ...drawerProps
}) => {
  return (
    <Modal
      {...drawerProps}
      transition={transition ? transitions[placement] : 'none'}
      className={classNames('fixed', {
        'inset-x-0 bottom-0': placement === 'bottom',
        'inset-x-0 top-0': placement === 'top',
        'inset-y-0 left-0': placement === 'left',
        'inset-y-0 right-0': placement === 'right',
      })}
    >
      {children}
    </Modal>
  );
};

Drawer.Title = Modal.Title;
Drawer.Subtitle = Modal.SubTitle;
Drawer.Header = DrawerHeader;
Drawer.Content = DrawerContent;
Drawer.Footer = DrawerFooter;
