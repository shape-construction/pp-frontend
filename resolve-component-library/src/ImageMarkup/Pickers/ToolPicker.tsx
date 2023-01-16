import React, { FC, useState } from 'react';
import { usePopper } from 'react-popper';
import { Popover } from '@headlessui/react';

export interface ToolPickerProps {
  button: React.ReactElement;
  panel: (args: {
    open: boolean;
    close(focusableElement?: HTMLElement): void;
  }) => React.ReactElement;
}

export const ToolPicker: FC<ToolPickerProps> = ({ button, panel }) => {
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>();
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
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
    <div className="w-full max-w-sm">
      <Popover>
        <Popover.Button ref={setReferenceElement} as="div" className="max-w-max">
          {button}
        </Popover.Button>

        <Popover.Panel
          className="z-popover"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {(props) => {
            const Element = panel(props);
            return React.cloneElement(Element, {
              className:
                'p-2 flex flex-col gap-2 justify-center rounded-md shadow-md bg-white sm:flex-row sm:items-center',
            });
          }}
        </Popover.Panel>
      </Popover>
    </div>
  );
};
