import React, { ReactElement, useEffect, useState, MouseEventHandler } from 'react';
import { usePopper } from 'react-popper';
import type { Placement } from '@popperjs/core';

import { Popover as HeadlessPopover, Portal } from '@headlessui/react';

export interface PopoverProps {
  /**
   * Popover content that is displayed when popover is expanded
   */
  content: ReactElement;
  /**
   * Element that will trigger the popover
   */
  children: ReactElement;
  /**
   * Placement of the popover content when expanded
   * @typedef {("top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end")}
   */
  placement?: Placement;
  /**
   * Element wrapping children
   * @default button
   */
  as?: React.ElementType;
  /**
   * Action to be triggered on clicking the popover button
   */
  onClickButton?: MouseEventHandler;
  /**
   * Boolean that states if popover.panel static property is true
   */
  isStatic?: boolean;
  /**
   * Action to be triggered to control if popover.panel is open or not, when panelStatic is true
   */
  open?: boolean;
}

export const Popover = ({
  content,
  children,
  placement = 'auto',
  as: ChildrenWrapper = 'button' as const,
  onClickButton,
  isStatic,
  open: isPanelOpen,
}: PopoverProps) => {
  const { innerWidth } = window;

  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>();
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  useEffect(() => {
    if (popperElement && innerWidth < 768) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [popperElement, innerWidth]);

  return (
    <HeadlessPopover>
      {({ close, open }) => {
        const isOpen = isStatic ? isPanelOpen : open;

        return (
          <>
            <HeadlessPopover.Button
              ref={setReferenceElement}
              aria-label="popover-button"
              as={ChildrenWrapper}
              onClick={onClickButton}
              className="w-full"
            >
              {children}
            </HeadlessPopover.Button>
            {isOpen && (
              <Portal>
                <HeadlessPopover.Panel static={isStatic}>
                  <div
                    role="presentation"
                    aria-label="popover-panel-sm"
                    className="relative z-popover block md:hidden"
                  >
                    <div
                      role="none"
                      className="overflow-none fixed left-0 top-0 h-screen w-screen bg-gray-800 bg-opacity-75 backdrop-filter"
                      onClick={() => {
                        close();
                      }}
                    />
                    <div className="fixed left-0 bottom-0 w-full rounded-t-lg bg-white px-3 pt-3 pb-6 shadow-lg sm:pb-3">
                      {content}
                    </div>
                  </div>
                  <div
                    className="z-popover hidden rounded-lg bg-white p-3 shadow-lg md:block"
                    ref={setPopperElement}
                    role="presentation"
                    aria-label="popover-panel-lg"
                    style={styles.popper}
                    {...attributes.popper}
                  >
                    {content}
                  </div>
                </HeadlessPopover.Panel>
              </Portal>
            )}
          </>
        );
      }}
    </HeadlessPopover>
  );
};
