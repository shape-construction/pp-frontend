import React from 'react';
import { render } from '@testing-library/react';

import { DetailItemInline } from '.';

describe('Detail Item', () => {
  it('renders the label and value', () => {
    const props = {
      label: 'label',
      value: 'value',
    };
    const { getByText } = render(<DetailItemInline {...props} />);

    expect(getByText(/label/)).toBeInTheDocument();
    expect(getByText(/value/)).toBeInTheDocument();
  });
});
