import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { SearchField, SearchFieldProps } from './SearchField';

describe('SearchField', () => {
  it('renders Search as the default placeholder', () => {
    const props: SearchFieldProps = {
      onChange: () => {},
    };

    const { getByPlaceholderText } = render(<SearchField {...props} />);

    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  describe('when placeholder is specified', () => {
    it('renders the provided value', () => {
      const props: SearchFieldProps = {
        placeholder: 'Search your favorite reducer...',
        onChange: () => {},
      };

      const { getByPlaceholderText } = render(<SearchField {...props} />);

      expect(getByPlaceholderText('Search your favorite reducer...')).toBeInTheDocument();
    });
  });

  describe('when user types something', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.runOnlyPendingTimers();
      jest.useRealTimers();
    });

    describe('and not enough time has passed', () => {
      it('does not call onChange', () => {
        const props: SearchFieldProps = {
          onChange: jest.fn(),
        };
        const { getByPlaceholderText } = render(<SearchField {...props} />);

        userEvent.type(getByPlaceholderText('Search'), 'My new reducer');
        jest.advanceTimersByTime(249);

        expect(props.onChange).not.toHaveBeenCalled();
      });
    });

    describe('and enough time has passed', () => {
      it('call onChange with the value', () => {
        const props: SearchFieldProps = {
          onChange: jest.fn(),
        };
        const { getByPlaceholderText } = render(<SearchField {...props} />);

        userEvent.type(getByPlaceholderText('Search'), 'My new reducer');
        jest.advanceTimersByTime(251);

        expect(props.onChange).toHaveBeenCalledWith('My new reducer');
      });
    });
  });
});
