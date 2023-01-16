import React, { FC } from 'react';
import { ShapeOvalIcon } from '../../Icons';
import { Tool, ToolProps } from './Tool';

export type CircleToolProps = Omit<ToolProps, 'icon'>;

export const CircleTool: FC<CircleToolProps> = (props) => (
  <Tool icon={<ShapeOvalIcon />} {...props} />
);
