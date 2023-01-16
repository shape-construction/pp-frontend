import React, { FC } from 'react';
import { ArrowNarrowLeftIcon } from '../../Icons';
import { Tool, ToolProps } from './Tool';

export type UndoToolProps = Omit<ToolProps, 'icon'>;

export const UndoTool: FC<UndoToolProps> = (props) => (
  <Tool icon={<ArrowNarrowLeftIcon />} {...props} />
);
