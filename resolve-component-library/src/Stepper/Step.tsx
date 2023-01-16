import React from 'react';
import classNames from 'classnames';

export interface StepProps {
  /**
   * The step should be passed here
   */
  variant?: 'complete' | 'current' | 'incomplete';
}

const classes = {
  listItem: 'block w-2.5 h-2.5 rounded-full',
  variant: {
    complete: 'bg-indigo-600 hover:bg-indigo-900',
    current: 'relative bg-indigo-600',
    incomplete: 'bg-gray-200 hover:bg-gray-400',
  },
};

export const Step: React.FC<StepProps> = ({ variant = 'incomplete' }) => (
  <li aria-label={variant}>
    {variant === 'complete' && (
      <div className={classNames(classes.listItem, classes.variant.complete)} />
    )}
    {variant === 'current' && (
      <div className="relative flex items-center justify-center">
        <span className="absolute w-5 h-5 p-px flex" aria-hidden="true">
          <span className="w-full h-full rounded-full bg-indigo-200" />
        </span>
        <span
          className={classNames(classes.listItem, classes.variant.current)}
          aria-hidden="true"
        />
      </div>
    )}
    {variant === 'incomplete' && (
      <div className={classNames(classes.listItem, classes.variant.incomplete)} />
    )}
  </li>
);
