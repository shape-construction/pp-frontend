import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Color, colors } from '../colors';
import { ColorPicker, ColorPickerProps } from './ColorPicker';
import { expectToThrow } from '../../tests/test-utils';

const defaultProps: ColorPickerProps = {
  onClick: jest.fn(),
  onSelect: jest.fn(),
  selectedColor: 'yellow',
};

describe('ColorPicker', () => {
  it('throw error when passing not defined color', () => {
    expectToThrow(() => {
      render(<ColorPicker {...defaultProps} colors={['red']} selectedColor="yellow" />);
    }, 'The selected color is not defined in colors');
  });

  it('render yellow as default color', () => {
    render(<ColorPicker {...defaultProps} />);

    expect(screen.getByRole('button', { name: 'yellow' })).toBeInTheDocument();
  });

  it('render black as default color', () => {
    render(<ColorPicker {...defaultProps} selectedColor="black" />);

    expect(screen.getByRole('button', { name: 'black' })).toBeInTheDocument();
  });

  it('render all pallete colors', async () => {
    render(<ColorPicker {...defaultProps} selectedColor="black" />);

    userEvent.click(screen.getByRole('button', { name: 'black' }));

    expect((await screen.findAllByRole('radio')).length).toEqual(8);
  });

  it('render all pallete colors without black and blue color', async () => {
    const colorsToFilter: Color[] = ['black', 'blue'];
    const newColors = colors.filter((color) => !colorsToFilter.includes(color));

    render(<ColorPicker {...defaultProps} colors={newColors} selectedColor="green" />);

    userEvent.click(screen.getByRole('button', { name: 'green' }));

    expect((await screen.findAllByRole('radio')).length).toEqual(6);
  });

  it('select green color from pallete', async () => {
    const spyOnSelect = jest.fn();
    render(<ColorPicker {...defaultProps} onSelect={spyOnSelect} />);

    userEvent.click(screen.getByRole('button', { name: 'yellow' }));

    const optionToSelect = await screen.findByRole('radio', { name: 'green' });

    userEvent.click(optionToSelect);

    expect(spyOnSelect).toBeCalledTimes(1);
    expect(spyOnSelect).toBeCalledWith('green');
  });
});
