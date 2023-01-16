import React from 'react';
import { render, screen } from '@testing-library/react';
import { SplitScreen } from './SplitScreen';

describe('SplitScreen Template', () => {
  it('renders the left and right panels', () => {
    render(
      <SplitScreen>
        <SplitScreen.LeftPanel>Left Panel</SplitScreen.LeftPanel>
        <SplitScreen.RightPanel>Right Panel</SplitScreen.RightPanel>
      </SplitScreen>
    );

    expect(screen.getByText('Left Panel')).toBeInTheDocument();
    expect(screen.getByText('Right Panel')).toBeInTheDocument();
  });
});
