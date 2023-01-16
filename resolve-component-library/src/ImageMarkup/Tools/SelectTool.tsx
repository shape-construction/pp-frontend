import React, { FC } from 'react';
import { Tool, ToolProps } from './Tool';
import { ArrowsMoveIcon } from '../../Icons';

export type SelectToolProps = Omit<ToolProps, 'icon'>;

export const SelectTool: FC<SelectToolProps> = (props) => (
  <Tool icon={<ArrowsMoveIcon />} {...props} />
);
