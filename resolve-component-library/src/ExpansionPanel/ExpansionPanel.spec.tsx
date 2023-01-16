import React from 'react';
import { screen, render } from '@testing-library/react';
import { fakeIntersectionObserver } from '../tests/test-utils';
import { ExpansionPanel } from './ExpansionPanel';
import userEvent from '@testing-library/user-event';

describe('ExpansionPanel', () => {
  beforeEach(() => {
    window.IntersectionObserver = fakeIntersectionObserver();
  });

  it('renders the header component', () => {
    render(
      <ExpansionPanel>
        <ExpansionPanel.Header>This is the title!</ExpansionPanel.Header>
      </ExpansionPanel>
    );

    expect(screen.getByText(/This is the title!/i)).toBeInTheDocument();
  });

  it('hides the content section when component is not open', () => {
    render(
      <ExpansionPanel>
        <ExpansionPanel.Content>This is the content!</ExpansionPanel.Content>
      </ExpansionPanel>
    );

    expect(screen.queryByText(/This is the content!/i)).not.toBeInTheDocument();
  });

  it('renders the content section when component is open by default', () => {
    render(
      <ExpansionPanel defaultOpen>
        <ExpansionPanel.Content>This is the content!</ExpansionPanel.Content>
      </ExpansionPanel>
    );

    expect(screen.getByText(/This is the content!/i)).toBeInTheDocument();
  });

  it('renders the content section when header is clicked', () => {
    render(
      <ExpansionPanel defaultOpen>
        <ExpansionPanel.Content>This is the header!</ExpansionPanel.Content>
        <ExpansionPanel.Content>This is the content!</ExpansionPanel.Content>
      </ExpansionPanel>
    );

    userEvent.click(screen.getByText(/This is the header/i));

    expect(screen.getByText(/This is the content!/i)).toBeInTheDocument();
  });
});
