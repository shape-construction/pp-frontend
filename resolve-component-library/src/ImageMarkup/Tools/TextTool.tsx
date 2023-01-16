import React, { FC } from 'react';
import { Tool, ToolProps } from './Tool';
import { TypeIcon } from '../../Icons';

export type TextToolProps = Omit<ToolProps, 'icon'>;

export const TextTool: FC<TextToolProps> = (props) => <Tool icon={<TypeIcon />} {...props} />;
