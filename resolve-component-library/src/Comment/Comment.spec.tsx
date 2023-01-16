import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Comment, CommentProps } from './Comment';

const content =
  'Mauris a nulla ac ligula rhoncus ullamcorper. Mauris non metus ut ante porta suscipit non elementum nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse sed tempor orci, non ornare dolor. Aenean tincidunt a magna eu tempus. In fringilla, nibh in porta viverra, diam dui varius dui, at tempor tortor lectus vitae elit. Nam metus nunc, vulputate non neque vitae, luctus placerat augue.';

const user = {
  id: 'user_id',
  firstName: 'John',
  lastName: 'Doe',
  name: 'John Doe',
  avatarUrl: 'https://picsum.photos/200',
};

const subheader = 'This is the subheader';

const renderComponent = (props: Partial<CommentProps> = {}) =>
  render(<Comment content={content} user={user} subheader={subheader} {...props} />);

describe('Comment', () => {
  it('renders the user avatar', () => {
    renderComponent();

    expect(screen.getByAltText('John Doe')).toBeInTheDocument();
  });

  it('renders the user name', () => {
    renderComponent();

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders the subheader', () => {
    renderComponent();

    expect(screen.getByText(subheader)).toBeInTheDocument();
  });

  it('renders the comment text', () => {
    renderComponent();

    expect(screen.getByText(content)).toBeInTheDocument();
  });

  describe('when content is html', () => {
    it('renders html properly', () => {
      renderComponent({ content: "<button type='button'>An embedded button</button>" });

      expect(screen.getByRole('button', { name: 'An embedded button' })).toBeInTheDocument();
    });
  });

  it('does not render Edit button', () => {
    renderComponent();

    expect(screen.queryByRole('button', { name: 'Edit' })).not.toBeInTheDocument();
  });

  it('does not render Delete button', () => {
    renderComponent();

    expect(screen.queryByRole('button', { name: 'Delete' })).not.toBeInTheDocument();
  });

  describe('when a onEdit prop is passed', () => {
    it('renders an Edit button', () => {
      renderComponent({ onEdit: () => {} });

      expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument();
    });

    it('calls onEdit when clicked', () => {
      const onEdit = jest.fn();
      renderComponent({ onEdit });

      userEvent.click(screen.getByRole('button', { name: 'Edit' }));

      expect(onEdit).toHaveBeenCalled();
    });
  });

  describe('when a onDelete prop is passed', () => {
    it('renders a Delete button', () => {
      renderComponent({ onDelete: () => {} });

      expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument();
    });

    it('calls onDelete when clicked', () => {
      const onDelete = jest.fn();
      renderComponent({ onDelete });

      userEvent.click(screen.getByRole('button', { name: 'Delete' }));

      expect(onDelete).toHaveBeenCalled();
    });
  });

  describe('when is editing', () => {
    it('does not render Delete nor Edit actions', () => {
      renderComponent({ onEdit: () => {}, onDelete: () => {}, isEditing: true });

      expect(screen.queryByRole('button', { name: 'Edit' })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Delete' })).not.toBeInTheDocument();
    });

    it('renders a Cancel editing button', () => {
      renderComponent({ onEdit: () => {}, onDelete: () => {}, isEditing: true });

      expect(screen.getByRole('button', { name: 'Cancel editing' })).toBeInTheDocument();
    });

    it('calls onCancelEditing when clicked', () => {
      const onCancelEditingSpy = jest.fn();
      renderComponent({
        onEdit: () => {},
        onDelete: () => {},
        isEditing: true,
        onCancelEditing: onCancelEditingSpy,
      });

      userEvent.click(screen.getByRole('button', { name: 'Cancel editing' }));

      expect(onCancelEditingSpy).toHaveBeenCalled();
    });
  });
});
