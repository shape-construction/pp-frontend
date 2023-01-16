import React, { FC } from 'react';
import { Tool, ToolProps } from './Tool';
import { ShapeSquareIcon } from '../../Icons';

export type SquareToolProps = Omit<ToolProps, 'icon'>;

export const SquareTool: FC<SquareToolProps> = (props) => (
  <Tool icon={<ShapeSquareIcon />} {...props} />
);
