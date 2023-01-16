import React from 'react';
import { render } from '@testing-library/react';

import { DetailItemHeader } from './DetailItemHeader';

describe('Detail Item', () => {
  it('displays each part', () => {
    const { getByText } = render(<DetailItemHeader icon="icon" title="title" />);

    expect(getByText('icon')).toBeInTheDocument();
    expect(getByText('title')).toBeInTheDocument();
  });
});
