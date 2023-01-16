import React from 'react';
import { render } from '@testing-library/react';
import { Steps } from './Steps';

describe('Steps', () => {
  it('renders the children passed', () => {
    const { getByText } = render(
      <Steps>
        <>Example Child</>
      </Steps>
    );

    expect(getByText('Example Child')).toBeInTheDocument();
  });
});
