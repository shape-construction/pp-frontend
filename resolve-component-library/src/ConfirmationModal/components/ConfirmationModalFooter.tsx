import React from 'react';
import classNames from 'classnames';
import { Modal } from '../../Modal/Modal';
import { breakpoints, useMediaQuery } from '../../hooks/useMediaQuery';
import { ButtonProps } from '../../Button/Button';

export interface ConfirmationModalFooterProps extends React.ComponentProps<typeof Modal.Footer> {
  centered?: boolean;
}

export const ConfirmationModalFooter: React.FC<ConfirmationModalFooterProps> = ({
  children,
  className,
  centered,
  ...props
}) => {
  const isSmallScreen = useMediaQuery(breakpoints.down('md'));
  const Actions = React.Children.map(children, (child) => {
    if (!React.isValidElement<ButtonProps>(child)) return child;

    return React.cloneElement(child, { fullWidth: isSmallScreen });
  });

  return (
    <Modal.Footer
      {...props}
      className={classNames(
        'flex flex-col-reverse space-x-0 space-y-2 space-y-reverse md:flex-row md:space-y-0 md:space-x-2',
        {
          'md:justify-center': centered,
        },
        className
      )}
    >
      {Actions}
    </Modal.Footer>
  );
};
