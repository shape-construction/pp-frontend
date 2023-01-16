import React, { Fragment, PropsWithChildren, useState } from 'react';
import {
  Listbox as HeadlessUIListBox,
  Listbox,
  Popover as HeadlessUIPopover,
  Transition,
} from '@headlessui/react';
import { usePopper } from 'react-popper';

import { ListBoxOption } from './components/ListBoxOption';
import { DefaultButton } from './components/ListBoxButton';
import { twMerge } from 'tailwind-merge';
import { ListBoxGroup } from './components/ListBoxGroup';

export type DefaultParams = {
  name: string;
  description?: string;
};

export interface ListBoxProps<T> {
  selected?: T;
  className?: string;
  onChange: (option: T) => void;
  renderButton?: (props: { selected?: T }) => JSX.Element;
}

function ListBox<T extends DefaultParams>({
  children,
  className,
  selected,
  onChange,
  renderButton = DefaultButton,
}: PropsWithChildren<ListBoxProps<T>>) {
  const [buttonElement, setButtonElement] = useState<HTMLDivElement | null>();
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>();
  const { styles, attributes } = usePopper(buttonElement, popperElement, {
    strategy: 'absolute',
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  const content = (
    <HeadlessUIListBox.Options
      className={twMerge(
        'max-h-[25rem] w-full min-w-max overflow-auto rounded-t-md bg-white text-base shadow-sm ring-1 focus:outline-none sm:text-sm md:rounded-md',
        className
      )}
    >
      {children}
    </HeadlessUIListBox.Options>
  );

  return (
    <HeadlessUIPopover>
      <HeadlessUIListBox value={selected} onChange={onChange}>
        <Listbox.Button ref={setButtonElement} as="div">
          {renderButton({ selected })}
        </Listbox.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-50"
          enterFrom="opacity-0 md:translate-y-1"
          enterTo="opacity-100 md:translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 md:translate-y-0"
          leaveTo="opacity-0 md:translate-y-1"
        >
          <HeadlessUIPopover.Panel className="fixed z-popover md:absolute">
            {/* Small screen */}
            <div role="presentation" aria-label="popover-panel-sm" className="block md:hidden">
              <div className="overflow-none fixed left-0 top-0 h-screen w-screen bg-gray-800 bg-opacity-75 backdrop-filter" />
              <div className="fixed left-0 bottom-0 w-full overflow-hidden rounded-t-lg bg-white shadow-lg">
                {content}
              </div>
            </div>
            {/* Large screen */}
            <div
              ref={setPopperElement}
              style={styles.popper}
              {...attributes.popper}
              role="presentation"
              aria-label="popover-panel-lg"
              className="hidden overflow-hidden rounded-lg bg-white shadow-lg md:block"
            >
              {content}
            </div>
          </HeadlessUIPopover.Panel>
        </Transition>
      </HeadlessUIListBox>
    </HeadlessUIPopover>
  );
}

ListBox.Button = DefaultButton;
ListBox.Group = ListBoxGroup;
ListBox.Option = ListBoxOption;

export { ListBox };
