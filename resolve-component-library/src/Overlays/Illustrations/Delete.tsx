import React from 'react';
import { TrashIcon } from '../../Icons/solid';
import IconBadge from '../../IconBadge';

const Delete: React.FC = () => (
  <IconBadge type="danger">
    <TrashIcon />
  </IconBadge>
);

export default Delete;
