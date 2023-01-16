import classnames from 'classnames';
import { InternalProps, SHAPE, SIZE } from './Badge.types';

export const sizePropsShaping = ({ shape, size }: InternalProps): Partial<InternalProps> => {
  const sizeClassNames = classnames('font-medium py-0.5', {
    'text-xs': size === SIZE.SMALL,
    'text-sm': size === SIZE.LARGE,
    'px-2.5':
      (shape === SHAPE.BASIC && size === SIZE.SMALL) || (SHAPE.ROUNDED && size === SIZE.LARGE),
    'px-3': shape === SHAPE.BASIC && size === SIZE.LARGE,
    'px-2': shape === SHAPE.ROUNDED && size === SIZE.SMALL,
  });

  return { sizeClassNames };
};
