import React, { useMemo } from 'react';
import classNames from 'classnames';
import { getChildByType } from 'react-nanny';
import { Modal } from '../../Modal/Modal';
import { ConfirmationModal } from '../ConfirmationModal';

export interface ConfirmationModalHeaderProps extends React.ComponentProps<typeof Modal.Header> {
  centered?: boolean;
}

export const ConfirmationModalHeader: React.FC<ConfirmationModalHeaderProps> = ({
  children,
  className,
  centered,
  ...props
}) => {
  const { Image, Title, SubTitle } = useMemo(
    () => ({
      Image: getChildByType(children, ConfirmationModal.Image),
      Title: getChildByType(children, ConfirmationModal.Title),
      SubTitle: getChildByType(children, ConfirmationModal.SubTitle),
    }),
    [children]
  );

  const classes = classNames(
    'flex flex-col items-center space-y-3 pb-3',
    {
      'md:flex-row md:items-start md:space-x-4 md:space-y-0': !centered,
      'pl-16': centered && props.onClose,
    },
    className
  );

  const titleSubtitleClasses = classNames('text-center', {
    'md:text-left': !centered,
  });

  return (
    <Modal.Header className={classes} {...props}>
      {Image}
      <div className={titleSubtitleClasses}>
        {Title}
        {SubTitle}
      </div>
    </Modal.Header>
  );
};
