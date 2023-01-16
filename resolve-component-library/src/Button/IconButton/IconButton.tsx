import React from 'react';
import { ButtonBase, ButtonBaseProps } from '../ButtonBase';
import { getIconClasses } from '../IconClasses';

export type IconButtonProps = Omit<
  ButtonBaseProps,
  'className' | 'fullWidth' | 'rounded' | 'children'
> & {
  icon: React.ElementType;
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, ...props }, ref) => {
    const { color, variant } = props;
    const { iconClasses } = getIconClasses({ color, variant });

    return (
      <ButtonBase {...props} ref={ref} rounded>
        <Icon data-testid="icon" className={iconClasses} />
      </ButtonBase>
    );
  }
);

IconButton.displayName = 'IconButton';
