import React from 'react';
import { render, screen } from '@testing-library/react';
import { CharacterCount, CharacterCountProps } from './CharacterCount';

describe('CharacterCount', () => {
  it('renders a fractional expression', () => {
    const props: CharacterCountProps = {
      sentence: 'A sentence with 29 characters',
      maximum: 30,
      label: 'characters',
    };

    render(<CharacterCount {...props} />);

    expect(screen.getByText('29/30 characters')).toBeInTheDocument();
  });
});
