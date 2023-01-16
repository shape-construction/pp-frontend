import classnames from 'classnames';
import React, {
  HtmlHTMLAttributes,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useMemo,
} from 'react';
import { LayoutContext, LayoutContextProps } from './LayoutContext';
import { Panel } from './components/Panel';

export interface SplitLayoutProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode[];
  direction?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
  expandedPanel?: number;
  onSetLayout: (index?: number) => void;
}

export const SplitLayout = ({
  className,
  children,
  expandedPanel,
  direction = 'row',
  onSetLayout,
  ...props
}: PropsWithChildren<SplitLayoutProps>) => {
  const childrens = React.Children.toArray(children);

  const values = useMemo(
    () => ({ expandedPanel, setExpandedPanel: (index?: number) => onSetLayout(index) }),
    [expandedPanel, onSetLayout]
  ) as LayoutContextProps;

  const elements = childrens.map((element, index) => {
    if (!React.isValidElement(element)) return element;

    const hasExpandedPanel = Number.isInteger(expandedPanel);

    const isHidden = hasExpandedPanel && expandedPanel !== index;
    const isExpanded = hasExpandedPanel && expandedPanel === index;

    return React.cloneElement(element as ReactElement, {
      index,
      isHidden,
      isExpanded,
    });
  });

  return (
    <LayoutContext.Provider value={values}>
      <div
        className={classnames(`flex flex-${direction} h-full w-full`, className)}
        data-testid="layout"
        {...props}
      >
        {elements}
      </div>
    </LayoutContext.Provider>
  );
};

SplitLayout.Panel = Panel;
