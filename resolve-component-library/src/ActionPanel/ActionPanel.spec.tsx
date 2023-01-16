import { render } from '@testing-library/react';
import React from 'react';
import Button from '../Button';

import { ActionPanel } from './ActionPanel';

describe('Action Panel', () => {
  const content = (
    <>
      <strong>Leslie Alexander</strong> marked the issue as complete.
    </>
  );
  const actions = (
    <>
      <Button color="danger" variant="contained" size="md">
        Reject
      </Button>
      <Button color="success" variant="contained" size="md">
        Approve
      </Button>
    </>
  );

  it('renders the content', () => {
    const { getByText } = render(<ActionPanel content={content} actions={actions} />);

    expect(getByText('Leslie Alexander')).toBeInTheDocument();
    expect(getByText('marked the issue as complete.')).toBeInTheDocument();
  });

  it('renders the actions', () => {
    const { getAllByRole, getByText } = render(<ActionPanel content={content} actions={actions} />);

    expect(getAllByRole('button')).toHaveLength(2);
    expect(getByText('Reject')).toBeInTheDocument();
    expect(getByText('Approve')).toBeInTheDocument();
  });
});
