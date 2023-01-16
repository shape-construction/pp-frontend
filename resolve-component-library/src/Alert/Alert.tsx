import React from 'react';
import classNames from 'classnames';
import {
  XCircleIcon,
  ExclamationIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from '../Icons/solid';

export interface AlertProps {
  /**
   * React component to render on the content of this component
   */
  children: React.ReactNode;
  /**
   * Type of context for this component.
   * It changes the icon and color scheme
   */
  type: 'error' | 'warning' | 'success' | 'info';
  variant?: 'inline' | 'banner';
  Actions?: React.ReactNode;
  /**
   * Enable centered layout
   */
  centered?: boolean;
  /**
   * Override icon
   */
  icon?: React.ReactNode;
}

const icons = {
  error: <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />,
  warning: <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />,
  success: <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />,
  info: <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />,
};

export const Alert: React.FC<AlertProps> = ({
  type,
  children,
  Actions,
  centered,
  icon,
  variant = 'inline',
}) => {
  const baseClassNames = 'p-3 border sm:p-4';
  const variantClassNames = {
    'rounded-md': variant === 'inline',
  };
  const typeClassNames = classNames({
    'bg-red-50 border-red-100': type === 'error',
    'bg-yellow-50 border-yellow-100': type === 'warning',
    'bg-green-50 border-green-100': type === 'success',
    'bg-blue-50 border-blue-100': type === 'info',
  });
  const alertWrapperClassnames = classNames(baseClassNames, variantClassNames, typeClassNames);
  const alertContentClassnames = classNames(
    'ml-3 text-sm flex justify-between flex-wrap items-center gap-2',
    {
      'w-full': !centered,
      'text-red-700': type === 'error',
      'text-yellow-700': type === 'warning',
      'text-green-700': type === 'success',
      'text-blue-700': type === 'info',
    }
  );
  const iconElement = icon || icons[type];

  return (
    <div className={alertWrapperClassnames} data-testid={`alert-${type}`}>
      <div className="flex items-center justify-center">
        <div className="shrink-0">{iconElement}</div>
        <div className={alertContentClassnames}>
          {children}
          {Actions}
        </div>
      </div>
    </div>
  );
};
