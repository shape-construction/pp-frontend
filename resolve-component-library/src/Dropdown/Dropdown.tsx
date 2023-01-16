import { Menu } from '@headlessui/react';
import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import { DropdownButton } from './DropdownButton';
import { DropdownItem } from './DropdownItem';
import { DropdownItems } from './DropdownItems';

type Components = {
  Item: typeof DropdownItem;
};

type DropdownProps = {
  button: React.ReactNode;
  items: React.ReactNode;
};

export const Dropdown: React.FC<DropdownProps> & Components = ({ button, items }) => {
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>();
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-end',
    strategy: 'fixed',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  return (
    <Menu>
      <div ref={setReferenceElement}>
        <DropdownButton>{button}</DropdownButton>
      </div>
      <DropdownItems ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        {items}
      </DropdownItems>
    </Menu>
  );
};

Dropdown.Item = DropdownItem;
