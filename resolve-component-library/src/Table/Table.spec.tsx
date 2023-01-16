import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';

describe('Table', () => {
  it('displays table headers', () => {
    render(
      <Table.Container>
        <Table>
          <Table.Heading>
            <Table.Row>
              <Table.Header>First header</Table.Header>
              <Table.Header>Second header</Table.Header>
            </Table.Row>
          </Table.Heading>
        </Table>
      </Table.Container>
    );

    expect(screen.getByRole('columnheader', { name: 'First header' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Second header' })).toBeInTheDocument();
  });

  it('displays table cells', () => {
    render(
      <Table.Container>
        <Table>
          <Table.Heading>
            <Table.Row>
              <Table.Header>First header</Table.Header>
              <Table.Header>Second header</Table.Header>
            </Table.Row>
          </Table.Heading>
          <Table.Body>
            <Table.Row>
              <Table.Cell>First cell</Table.Cell>
              <Table.Cell>Second cell</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Table.Container>
    );

    expect(screen.getByRole('cell', { name: 'First cell' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'Second cell' })).toBeInTheDocument();
  });
});
