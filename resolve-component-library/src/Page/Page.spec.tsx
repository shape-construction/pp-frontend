import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Page } from './Page';

describe('NotificationModal', () => {
  describe('Page header', () => {
    it('renders header title', () => {
      render(
        <Page>
          <Page.Header aria-label="page header" title="This is the header title" />
        </Page>
      );

      expect(screen.getByRole('heading')).toHaveTextContent('This is the header title');
    });

    it('renders the right section', () => {
      render(
        <Page>
          <Page.Header
            title="header"
            rightSection={<button type="button">This is an action</button>}
          />
        </Page>
      );

      expect(screen.getByRole('button', { name: 'This is an action' })).toBeInTheDocument();
    });

    it('renders the bottom section', () => {
      render(
        <Page>
          <Page.Header title="header" bottomSection={<>This is the bottom section</>} />
        </Page>
      );

      expect(screen.getByText('This is the bottom section')).toBeInTheDocument();
    });

    it('renders the back navigation button', () => {
      render(
        <Page>
          <Page.Header
            title="header"
            hasBackNavigation
            backNavigationTitle="back to page"
            onBackNavigation={() => {}}
          />
        </Page>
      );

      expect(screen.getByRole('button', { name: /back to page/i })).toBeInTheDocument();
    });

    it('renders custom title component', () => {
      render(
        <Page>
          <Page.Header
            title="this is a custom title"
            titleAs={({ children }) => <h2 aria-label="new heading">{children}</h2>}
          />
        </Page>
      );

      expect(screen.getByRole('heading', { name: /new heading/i })).toHaveTextContent(
        /this is a custom title/i
      );
    });

    it('executes back handler on clicking back navigation', () => {
      const spyOnBackNavigation = jest.fn();
      render(
        <Page>
          <Page.Header
            title="header"
            hasBackNavigation
            backNavigationTitle="back to page"
            onBackNavigation={spyOnBackNavigation}
          />
        </Page>
      );

      userEvent.click(screen.getByRole('button', { name: /back to page/i }));

      expect(spyOnBackNavigation).toBeCalledTimes(1);
    });
  });
});
