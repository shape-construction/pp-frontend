import React, { MouseEventHandler } from 'react';
import { TrashIcon } from '../Icons/outline';
import { UserAvatar } from '../Avatar';
import Button from '../Button';
import IconButton from '../Button/IconButton';

export interface CommentProps {
  /**
   * content of the comment
   */
  content: string;
  /**
   * section to be displayed right next to the user.name, on the header of the component
   */
  subheader?: string;
  /**
   * user details
   */
  user: User;
  /**
   * comment is being edited
   */
  isEditing?: boolean;
  /**
   * handler for cancelling edit button
   */
  onCancelEditing?: MouseEventHandler;
  /**
   * handler for edit button
   */
  onEdit?: MouseEventHandler;
  /**
   * handler for delete button
   */
  onDelete?: MouseEventHandler;
}

export const Comment: React.FC<CommentProps> = ({
  content,
  subheader,
  user,
  isEditing = false,
  onCancelEditing = () => {},
  onEdit,
  onDelete,
}) => {
  const renderActions = () => (
    <>
      {onEdit && (
        <Button color="primary" variant="text" size="sm" onClick={onEdit}>
          Edit
        </Button>
      )}
      {onDelete && (
        <IconButton
          icon={TrashIcon}
          onClick={onDelete}
          aria-label="Delete"
          color="secondary"
          variant="text"
          size="sm"
        />
      )}
    </>
  );
  const renderCancelEditing = () => (
    <Button color="primary" variant="text" size="sm" onClick={onCancelEditing}>
      Cancel editing
    </Button>
  );

  return (
    <article className="flex gap-3">
      <UserAvatar user={user} size="lg" />
      <div className="flex-1 text-sm leading-5">
        <header className="flex items-center justify-between font-medium">
          <div>
            {user.name}
            {subheader && <span className="ml-2 font-normal text-gray-500">{subheader}</span>}
          </div>
          <div className="align-end ml-2 flex">
            {isEditing ? renderCancelEditing() : renderActions()}
          </div>
        </header>
        <div className="mt-1 break-words" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </article>
  );
};
