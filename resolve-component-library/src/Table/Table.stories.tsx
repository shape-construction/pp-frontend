import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Table, TableProps } from './Table';

export default {
  component: Table,
  subcomponents: {},
  title: 'Design System/Table',
} as Meta<TableProps>;

const Template: Story<{ striped?: boolean }> = ({ striped = false }) => (
  <Table.Container>
    <Table>
      <Table.Heading>
        <Table.Row>
          <Table.Header>First header</Table.Header>
          <Table.Header>Second header</Table.Header>
        </Table.Row>
      </Table.Heading>
      <Table.Body>
        <Table.Row striped={striped}>
          <Table.Cell>A table cell</Table.Cell>
          <Table.Cell>Another table cell</Table.Cell>
        </Table.Row>
        <Table.Row striped={striped}>
          <Table.Cell>A table cell</Table.Cell>
          <Table.Cell>Another table cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Table.Container>
);

export const Default = Template.bind({});

export const Striped = Template.bind({});
Striped.args = {
  ...Default.args,
  striped: true,
};
