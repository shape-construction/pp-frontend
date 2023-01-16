import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { DetailItem } from './DetailItem';

describe('Detail Item', () => {
  const onClick = jest.fn();

  beforeEach(() => {
    onClick.mockClear();
  });

  it(`displays each part when there aren't any children`, () => {
    const { getByText } = render(<DetailItem icon="icon" title="title" />);

    expect(getByText('icon')).toBeInTheDocument();
    expect(getByText('title')).toBeInTheDocument();
  });

  it('triggers the main onClick on the header text', () => {
    const { getByText } = render(<DetailItem icon="icon" title="title" onClick={onClick} />);

    fireEvent.click(getByText('title'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('triggers the main onClick on the icon', () => {
    const { getByText } = render(<DetailItem icon="icon" title="title" onClick={onClick} />);

    fireEvent.click(getByText('icon'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('doesnt render children by default', () => {
    const { getByText, queryByText } = render(
      <DetailItem icon="icon" title="title">
        children
      </DetailItem>
    );

    expect(getByText('icon')).toBeInTheDocument();
    expect(getByText('title')).toBeInTheDocument();
    expect(queryByText('children')).not.toBeInTheDocument();
  });

  it('displays each part with children with defaultOpen set', () => {
    const { getByText } = render(
      <DetailItem icon="icon" title="title" defaultOpen>
        children
      </DetailItem>
    );

    expect(getByText('icon')).toBeInTheDocument();
    expect(getByText('title')).toBeInTheDocument();
    expect(getByText('children')).toBeInTheDocument();
  });

  it('renders children after a click', () => {
    const { getByText } = render(
      <DetailItem icon="icon" title="title">
        children
      </DetailItem>
    );

    expect(getByText('icon')).toBeInTheDocument();
    expect(getByText('title')).toBeInTheDocument();

    fireEvent.click(getByText('title'));

    expect(getByText('children')).toBeInTheDocument();
  });

  it('triggers the main onClick on the children', () => {
    const { getByText } = render(
      <DetailItem icon="icon" title="title" onClick={onClick}>
        children
      </DetailItem>
    );

    fireEvent.click(getByText('icon'));

    fireEvent.click(getByText('children'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  describe('when disabled', () => {
    it('does not trigger the onClick ', () => {
      render(
        <DetailItem disabled icon="icon" title="title" onClick={onClick}>
          children
        </DetailItem>
      );

      fireEvent.click(screen.getByRole('button'));

      expect(onClick).not.toHaveBeenCalled();
    });
  });

  it(`doesn't trigger the main onClick on the icon when it has children`, () => {
    const { getByText } = render(
      <DetailItem icon="icon" title="title" onClick={onClick}>
        children
      </DetailItem>
    );

    fireEvent.click(getByText('icon'));

    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it(`doesn't trigger the main onClick on the title when it has children`, () => {
    const { getByText } = render(
      <DetailItem icon="icon" title="title" onClick={onClick}>
        children
      </DetailItem>
    );

    fireEvent.click(getByText('title'));

    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it(`always displays children if expandable prop is false`, () => {
    const { getByText } = render(
      <DetailItem icon="icon" title="title" onClick={onClick} expandable={false}>
        children
      </DetailItem>
    );

    fireEvent.click(getByText('children'));

    expect(getByText('title')).toBeInTheDocument();
    expect(getByText('children')).toBeInTheDocument();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
