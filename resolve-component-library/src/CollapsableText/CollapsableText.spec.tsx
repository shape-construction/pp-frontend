import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CollapsableText } from './CollapsableText';

const longContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec malesuada dolor. Quisque fermentum eros in orci pellentesque, non maximus erat iaculis. Vivamus in lectus dictum, gravida felis et, bibendum ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas scelerisque enim id nisi faucibus rhoncus. Donec sodales tempus faucibus. Nulla rutrum est diam, at aliquet diam auctor nec. Sed vel bibendum tortor, id hendrerit ipsum. Integer nec condimentum augue. Nullam neque nisi, condimentum non libero in, tempor varius nisi. Nunc egestas sodales vulputate. Duis congue quam ipsum, sed egestas turpis sollicitudin ut.';
const shortContent = 'Lorem ipsum dolor sit amet';

describe('collapsable text component', () => {
  it('renders a short version of the content with see more button', () => {
    const { getByText, getByRole } = render(
      <CollapsableText content={longContent} maxWordsCount={10} />
    );

    expect(
      getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec…')
    ).toBeInTheDocument();
    expect(
      getByRole('button', {
        name: 'See more',
      })
    ).toBeInTheDocument();
  });

  it('renders the complete content without see more button, when content has less words than the limit', () => {
    const { getByText, queryByRole } = render(
      <CollapsableText content={shortContent} maxWordsCount={15} />
    );

    expect(getByText(shortContent)).toBeInTheDocument();
    expect(
      queryByRole('button', {
        name: 'See more',
      })
    ).not.toBeInTheDocument();
  });

  it('renders a full version of the content when see more button is clicked', () => {
    const { getByRole, getByText } = render(<CollapsableText content={longContent} />);

    userEvent.click(
      getByRole('button', {
        name: 'See more',
      })
    );

    expect(getByText(longContent)).toBeInTheDocument();
    expect(
      getByRole('button', {
        name: 'See less',
      })
    ).toBeInTheDocument();
  });

  it('renders the title before the text content', () => {
    const { getByText } = render(
      <CollapsableText content={longContent} title="Example of Title" />
    );

    expect(getByText('Example of Title')).toBeInTheDocument();
  });

  it('renders the text content with an onClick action, after the see more button is clicked', () => {
    const onClickAction = jest.fn();

    const { getByText, getByRole } = render(
      <CollapsableText content={longContent} title="Example of Title" onClick={onClickAction} />
    );

    userEvent.click(
      getByRole('button', {
        name: 'See more',
      })
    );

    userEvent.click(getByText(longContent));

    expect(onClickAction).toHaveBeenCalledTimes(1);
  });

  it('renders the full content with an onClick action when when content has less words than the limit', () => {
    const onClickAction = jest.fn();

    const { getByText } = render(
      <CollapsableText content={shortContent} title="Example of Title" onClick={onClickAction} />
    );

    userEvent.click(getByText(shortContent));

    expect(onClickAction).toHaveBeenCalledTimes(1);
  });
});
