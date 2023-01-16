import React, { FC } from 'react';
import { ArrowNarrowTopRightIcon } from '../../Icons';
import { Tool, ToolProps } from './Tool';

export type ArrowToolProps = Omit<ToolProps, 'icon'>;

export const ArrowTool: FC<ArrowToolProps> = (props) => (
  <Tool icon={<ArrowNarrowTopRightIcon />} {...props} />
);
