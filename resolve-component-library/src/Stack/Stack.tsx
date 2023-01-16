import React from 'react';
import classNames from 'classnames';
import { StackItem } from './StackItem';
import Divider from '../Divider';

type Components = {
  Item: typeof StackItem;
};

export type Direction = 'row' | 'column';
export type Spacing = '-1' | '-2' | '-3' | '0' | '1' | '2' | '3' | '4' | '5' | '6';
export type Order = 'bottom-to-top' | 'top-to-bottom';

export type StackProps = React.ComponentProps<'div'> & {
  direction?: Direction;
  divider?: boolean;
  spacing?: Spacing;
  order?: Order;
  children: React.ReactNode;
};

const spacings: Record<Direction, Record<Spacing, string>> = {
  row: {
    '-1': '-space-x-1',
    '-2': '-space-x-2',
    '-3': '-space-x-3',
    '0': 'space-x-0',
    '1': 'space-x-1',
    '2': 'space-x-2',
    '3': 'space-x-3',
    '4': 'space-x-4',
    '5': 'space-x-5',
    '6': 'space-x-6',
  },
  column: {
    '-1': '-space-y-1',
    '-2': '-space-y-2',
    '-3': '-space-y-3',
    '0': 'space-y-0',
    '1': 'space-y-1',
    '2': 'space-y-2',
    '3': 'space-y-3',
    '4': 'space-y-4',
    '5': 'space-y-5',
    '6': 'space-y-6',
  },
};

const zIndexes = ['z-0', 'z-[1]', 'z-[2]', 'z-[3]', 'z-[4]', 'z-[5]'];

export const Stack: React.FC<StackProps> & Components = ({
  children,
  direction = 'row',
  divider,
  spacing = '0',
  order = 'bottom-to-top',
  ...props
}) => {
  const spacingClass = spacings[direction][spacing];
  const items = React.Children.map(children, (item, index) => {
    if (!React.isValidElement(item)) return null;
    const element = React.cloneElement(item);
    const zIndexSet = order === 'bottom-to-top' ? zIndexes : zIndexes.slice().reverse();

    return (
      <>
        {divider && index > 0 && <Divider direction={direction} />}
        <div className={classNames(zIndexSet[index])}>{element}</div>
      </>
    );
  });

  return (
    <div
      role="list"
      className={classNames(
        'flex',
        {
          'flex-row': direction === 'row',
          'flex-col': direction === 'column',
          'isolate': order == 'top-to-bottom',
        },
        spacingClass
      )}
      {...props}
    >
      {items}
    </div>
  );
};

Stack.Item = StackItem;
