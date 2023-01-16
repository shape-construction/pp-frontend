import React from 'react';
import { render, screen } from '@testing-library/react';
import { Stack } from './Stack';

describe('Stack', () => {
  it('renders the stack and items', () => {
    render(
      <Stack aria-label="stack list">
        <Stack.Item aria-label="element 1">Element 1</Stack.Item>
        <Stack.Item aria-label="element 2">Element 2</Stack.Item>
        <Stack.Item aria-label="element 3">Element 3</Stack.Item>
      </Stack>
    );

    expect(screen.getByRole('list', { name: 'stack list' }));
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByRole('listitem', { name: 'element 1' })).toBeInTheDocument();
    expect(screen.getByRole('listitem', { name: 'element 2' })).toBeInTheDocument();
    expect(screen.getByRole('listitem', { name: 'element 3' })).toBeInTheDocument();
  });

  it('renders the stack with dividers', () => {
    render(
      <Stack aria-label="stack list" divider>
        <Stack.Item aria-label="element 1">Element 1</Stack.Item>
        <Stack.Item aria-label="element 2">Element 2</Stack.Item>
        <Stack.Item aria-label="element 3">Element 3</Stack.Item>
      </Stack>
    );

    expect(screen.getAllByRole('separator', { name: 'divider' })).toHaveLength(2);
  });
});
