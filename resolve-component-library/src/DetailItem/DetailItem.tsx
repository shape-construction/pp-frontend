import React from 'react';
import classNames from 'classnames';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '../Icons/solid';
import { ButtonPanel, ButtonPanelProps } from '../ButtonPanel/ButtonPanel';
import { DetailItemHeader, DetailItemHeaderProps } from './DetailItemHeader';

export interface ExpandableDetailItemProps extends Pick<ButtonPanelProps, 'onClick' | 'disabled'> {
  className: string;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  children: React.ReactNode;
  expandable?: boolean;
}

const ExpandableDetailItem: React.FC<ExpandableDetailItemProps> = ({
  className,
  defaultOpen,
  icon,
  title,
  children,
  disabled,
  onClick,
  expandable,
}) => {
  const panelClassNames = classNames('block pl-7 pr-1 text-sm text-gray-900', {
    'pt-1': title,
  });

  const detailItemHeader = icon || title ? <DetailItemHeader icon={icon} title={title} /> : null;

  return (
    <Disclosure as="div" className={className} defaultOpen={defaultOpen}>
      {({ open }) => (
        <>
          {expandable ? (
            <Disclosure.Button className="flex w-full flex-1 items-center justify-start">
              {detailItemHeader}

              <ChevronDownIcon
                className={classNames('ml-2 h-4 w-4 text-gray-400', {
                  'rotate-180 transform': open,
                })}
                aria-hidden="true"
              />
            </Disclosure.Button>
          ) : (
            detailItemHeader
          )}
          <Disclosure.Panel static={!expandable}>
            <ButtonPanel disabled={disabled} onClick={onClick}>
              <div className={panelClassNames}>{children}</div>
            </ButtonPanel>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export interface DetailItemProps
  extends Pick<DetailItemHeaderProps, 'title' | 'icon'>,
    Pick<ButtonPanelProps, 'onClick' | 'disabled'> {
  /**
   * expanded content
   */
  children?: React.ReactNode;
  /**
   * passed to the internal Disclosure component to say whether the component should be expanded or not
   * only works when children are passed
   */
  defaultOpen?: boolean;
  /**
   * passed to the internal Disclosure component to say whether the component should have the ability to expand or not
   * it allows to display children without the caret icon button
   * @default true
   */
  expandable?: boolean;
}

export const DetailItem: React.FC<DetailItemProps> = ({
  icon,
  title,
  children,
  disabled,
  onClick,
  defaultOpen,
  expandable = true,
}) => {
  const containerClassNames = classNames('rounded-md p-1 my-3', {
    'hover:bg-gray-100': !disabled || children,
  });
  // if we have children, then render as an expandable item (with a caret for expand / contract)
  if (children) {
    return (
      <ExpandableDetailItem
        className={containerClassNames}
        defaultOpen={defaultOpen}
        icon={icon}
        title={title}
        disabled={disabled}
        onClick={onClick}
        expandable={expandable}
      >
        {children}
      </ExpandableDetailItem>
    );
  }

  // otherwise, just render as a header
  // if we're clickable, then surround with a ButtonPanel which handles tab indexing and enter and space keypresses
  return (
    <ButtonPanel disabled={disabled} onClick={onClick}>
      <div className={containerClassNames}>
        <DetailItemHeader icon={icon} title={title} />
      </div>
    </ButtonPanel>
  );
};
