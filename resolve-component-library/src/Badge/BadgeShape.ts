import classnames from 'classnames';
import { InternalProps, SHAPE, SIZE } from './Badge.types';

export const shapePropsShaping = ({ shape, size }: InternalProps): Partial<InternalProps> => {
  const shapeClassNames = classnames('font-medium py-0.5', {
    'rounded-full': shape === SHAPE.BASIC,
    'rounded': shape === SHAPE.ROUNDED && size === SIZE.SMALL,
    'rounded-md': shape === SHAPE.ROUNDED && size === SIZE.LARGE,
  });

  return { shapeClassNames };
};
