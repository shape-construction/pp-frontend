import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Page, PageProps } from './Page';
import { EditInPlace } from '../EditInPlace/EditInPlace';
import Button from '../Button';
import { PlusIcon } from '../Icons/solid';

export default {
  title: 'Screens/Page',
  component: Page,
  subcomponents: {
    Header: Page.Header,
    Body: Page.Body,
  },
  parameters: { layout: 'fullscreen' },
} as Meta<PageProps>;

const TemplatePage: Story<PageProps> = ({ ref, ...props }) => <Page {...props} />;

export const HeaderWithTitle = TemplatePage.bind({});
HeaderWithTitle.args = {
  children: <Page.Header title="My profile" />,
};

export const HeaderWithRightSection = TemplatePage.bind({});
HeaderWithRightSection.args = {
  children: (
    <Page.Header
      title="Sint labore est commodo ex fugiat pariatur ut et veniam eiusmod aliquip do."
      rightSection={
        <Button color="primary" variant="contained" size="md" leadingIcon={PlusIcon}>
          New project
        </Button>
      }
    />
  ),
};

export const HeaderWithBackNavigation = TemplatePage.bind({});
HeaderWithBackNavigation.args = {
  children: (
    <Page.Header
      hasBackNavigation
      backNavigationTitle="Back to Teams"
      onBackNavigation={() => {}}
      title="This is a long title name"
      rightSection={
        <Button color="primary" variant="contained" size="md" leadingIcon={PlusIcon}>
          New project
        </Button>
      }
    />
  ),
};
export const HeaderWithBottomSection = TemplatePage.bind({});
HeaderWithBottomSection.args = {
  children: (
    <Page.Header
      hasBackNavigation
      backNavigationTitle="Back to Teams"
      onBackNavigation={() => {}}
      title="Nulla reprehenderit aliqua est velit cillum sunt ipsum magna duis adipisicing."
      rightSection={
        <Button color="primary" variant="contained" size="md" leadingIcon={PlusIcon}>
          New project
        </Button>
      }
      bottomSection="Reprehenderit sit magna in ea non non id commodo adipisicing magna ipsum enim eu."
    />
  ),
};

export const HeaderWithCustomTitle = TemplatePage.bind({});
HeaderWithCustomTitle.args = {
  children: (
    <Page.Header
      title="This is a long title name"
      titleAs={({ children: title }) => (
        <EditInPlace label="title" contentEditable onBlur={() => {}}>
          <h1
            className="mb-2 text-2xl font-semibold leading-8"
            title="title"
            data-testid="res-title-value"
          >
            {title}
          </h1>
        </EditInPlace>
      )}
      rightSection={
        <Button color="primary" variant="contained" size="md" leadingIcon={PlusIcon}>
          New project
        </Button>
      }
      bottomSection="This is the bottom section"
    />
  ),
};
