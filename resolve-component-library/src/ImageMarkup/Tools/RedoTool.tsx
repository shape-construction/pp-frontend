import React, { FC } from 'react';
import { ArrowNarrowRightIcon } from '../../Icons';
import { Tool, ToolProps } from './Tool';

export type RedoToolProps = Omit<ToolProps, 'icon'>;

export const RedoTool: FC<RedoToolProps> = (props) => (
  <Tool icon={<ArrowNarrowRightIcon />} {...props} />
);
