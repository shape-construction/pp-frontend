import React from 'react';
import { render, screen } from '@testing-library/react';
import { EditInPlace } from './EditInPlace';
import userEvent from '@testing-library/user-event';

const defaultProps = {
  label: 'Edit title',
  onBlur: jest.fn(),
};

describe('EditInPlace', () => {
  it('should trigger onBlur with updated value', () => {
    const onBlur = jest.fn();
    render(
      <EditInPlace {...defaultProps} onBlur={onBlur}>
        <h1>Departure from the app</h1>
      </EditInPlace>
    );

    const input = screen.getByLabelText('Edit title');
    expect(screen.getByLabelText('Edit title')).not.toHaveFocus();
    expect(screen.queryByTestId('edit-icon')).toBeInTheDocument();
    userEvent.click(input);
    userEvent.keyboard('roved');
    expect(screen.getByLabelText('Edit title')).toHaveFocus();
    expect(screen.queryByTestId('edit-icon')).not.toBeInTheDocument();

    userEvent.keyboard('[Enter]');
    expect(screen.getByLabelText('Edit title')).not.toHaveFocus();
    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledWith('Departure from the approved');
    expect(screen.getByLabelText('Edit title')).toHaveTextContent('Departure from the approved');

    // trigger onBlur conventionally
    userEvent.type(input, ' design');
    expect(screen.getByLabelText('Edit title')).toHaveFocus();
    expect(screen.queryByTestId('edit-icon')).not.toBeInTheDocument();
    input.blur();
    expect(screen.getByLabelText('Edit title')).not.toHaveFocus();

    expect(onBlur).toHaveBeenCalledTimes(2);
    expect(onBlur).toHaveBeenCalledWith('Departure from the approved design');
    expect(screen.getByLabelText('Edit title')).toHaveTextContent(
      'Departure from the approved design'
    );
  });

  it('should allow change by clicking the icon', () => {
    const onBlur = jest.fn();
    render(
      <EditInPlace {...defaultProps} onBlur={onBlur}>
        <h1>Departure from the app</h1>
      </EditInPlace>
    );

    const icon = screen.getByTestId('edit-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toBeVisible();

    userEvent.click(icon);
    userEvent.keyboard('roved');
    expect(screen.getByLabelText('Edit title')).toHaveFocus();
    expect(screen.queryByTestId('edit-icon')).not.toBeInTheDocument();
    userEvent.keyboard('[Enter]');
    expect(screen.getByLabelText('Edit title')).not.toHaveFocus();

    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledWith('Departure from the approved');
    expect(screen.getByLabelText('Edit title')).toHaveTextContent('Departure from the approved');
  });

  it('should not update when disabled', () => {
    const onBlur = jest.fn();
    render(
      <EditInPlace {...defaultProps} contentEditable={false} onBlur={onBlur}>
        <h1>Departure from the app</h1>
      </EditInPlace>
    );

    const input = screen.getByLabelText('Edit title');
    userEvent.type(input, 'roved design');
    expect(screen.getByLabelText('Edit title')).not.toHaveFocus();
    expect(screen.queryByTestId('edit-icon')).not.toBeInTheDocument();
    userEvent.keyboard('[Enter]');
    expect(screen.getByLabelText('Edit title')).not.toHaveFocus();
    expect(screen.queryByTestId('edit-icon')).not.toBeInTheDocument();

    expect(onBlur).not.toHaveBeenCalled();
    expect(screen.getByLabelText('Edit title')).toHaveTextContent('Departure from the app');
  });

  it('should display the `field length` label when the field is not blank', () => {
    const onBlur = jest.fn();
    render(
      <EditInPlace
        {...defaultProps}
        maxLength={48}
        contentEditable={true}
        showLengthMessage
        onBlur={onBlur}
      >
        <h1>Departure from the app</h1>
      </EditInPlace>
    );

    const input = screen.getByLabelText('Edit title');
    userEvent.click(input);
    expect(screen.getByLabelText('Edit title')).toHaveFocus();

    userEvent.keyboard('roved design');
    expect(screen.queryByRole('tooltip', { name: 'field length' })).toBeInTheDocument();
    expect(screen.queryByRole('tooltip', { name: 'field length' })).toHaveTextContent(
      '34 of 48 characters'
    );
    expect(screen.queryByRole('tooltip', { name: 'required field' })).not.toBeInTheDocument();

    userEvent.keyboard('[Enter]');
    expect(screen.getByLabelText('Edit title')).not.toHaveFocus();
    expect(screen.queryByRole('tooltip', { name: 'field length' })).not.toBeInTheDocument();
    expect(screen.queryByRole('tooltip', { name: 'required field' })).not.toBeInTheDocument();
    expect(screen.getByLabelText('Edit title')).toHaveTextContent(
      'Departure from the approved design'
    );

    userEvent.click(input);
    userEvent.keyboard('{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}route');

    userEvent.keyboard('[Enter]');
    expect(screen.getByLabelText('Edit title')).not.toHaveFocus();
    expect(screen.getByLabelText('Edit title')).toHaveTextContent(
      'Departure from the approved route'
    );
  });

  it('should display the `field required` label when the field is blank', () => {
    const onBlur = jest.fn();
    render(
      <EditInPlace
        {...defaultProps}
        maxLength={48}
        contentEditable={true}
        showLengthMessage
        onBlur={onBlur}
      >
        <h1>Route</h1>
      </EditInPlace>
    );

    const input = screen.getByLabelText('Edit title');
    userEvent.click(input);
    expect(screen.getByLabelText('Edit title')).toHaveFocus();

    userEvent.keyboard('{Delete}{Backspace}{Backspace}{Backspace}{Backspace}{Backspace}');

    expect(screen.queryByRole('tooltip', { name: 'field length' })).not.toBeInTheDocument();
    expect(screen.queryByRole('tooltip', { name: 'required field' })).toBeInTheDocument();
    expect(screen.queryByRole('tooltip', { name: 'required field' })).toHaveTextContent(
      'This field is required'
    );
    expect(screen.getByLabelText('Edit title')).toBeEmptyDOMElement();

    userEvent.keyboard('[Enter]');
    expect(screen.getByLabelText('Edit title')).toHaveFocus();

    userEvent.type(input, 'Path is blocked.');
    expect(screen.queryByRole('tooltip', { name: 'field length' })).toBeInTheDocument();
    expect(screen.queryByRole('tooltip', { name: 'field length' })).toHaveTextContent(
      '16 of 48 characters'
    );
    expect(screen.queryByRole('tooltip', { name: 'required field' })).not.toBeInTheDocument();

    userEvent.keyboard('[Enter]');
    expect(screen.getByLabelText('Edit title')).not.toHaveFocus();
    expect(screen.queryByRole('tooltip', { name: 'field length' })).not.toBeInTheDocument();
    expect(screen.queryByRole('tooltip', { name: 'required field' })).not.toBeInTheDocument();
    expect(screen.getByLabelText('Edit title')).toHaveTextContent('Path is blocked');
  });

  it('should not allow exceeding the character limit', () => {
    const onBlur = jest.fn();
    render(
      <EditInPlace {...defaultProps} maxLength={7} showLengthMessage onBlur={onBlur}>
        <h1>App</h1>
      </EditInPlace>
    );

    const icon = screen.getByTestId('edit-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toBeVisible();

    userEvent.click(icon);
    userEvent.keyboard('roved');
    expect(screen.getByLabelText('Edit title')).toHaveTextContent('Approve');
    expect(screen.queryByRole('tooltip', { name: 'field length' })).toBeInTheDocument();
    expect(screen.queryByRole('tooltip', { name: 'field length' })).toHaveTextContent(
      '7 of 7 characters'
    );
    expect(screen.queryByRole('tooltip', { name: 'required field' })).not.toBeInTheDocument();
  });
});
