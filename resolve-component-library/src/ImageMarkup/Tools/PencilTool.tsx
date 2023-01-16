import React, { FC } from 'react';
import { PencilIcon } from '../../Icons/outline';
import { Tool, ToolProps } from './Tool';

export type PencilToolProps = Omit<ToolProps, 'icon'>;

export const PencilTool: FC<PencilToolProps> = (props) => <Tool icon={<PencilIcon />} {...props} />;
