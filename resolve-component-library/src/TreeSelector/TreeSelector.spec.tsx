import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TreeSelector } from './TreeSelector';

const exampleTree = {
  id: '1',
  name: 'Whole Wide',
  shortCode: 'ROOT',
  childrensLabel: 'Stations',
  children: [
    {
      id: '1',
      parentId: null,
      name: 'Project Wide',
      shortCode: 'PROJ',
      childrensLabel: 'Stations',
      hasChildren: true,
    },
    {
      id: '2',
      parentId: '1',
      name: 'Battersea Power Station',
      shortCode: 'BPS',
      childrensLabel: 'Areas',
      hasChildren: true,
    },
    {
      id: '3',
      parentId: '2',
      name: 'Concourse',
      shortCode: 'CON',
      childrensLabel: null,
    },
    {
      id: '4',
      parentId: '21',
      name: 'Car Park',
      shortCode: 'CPK',
      childrensLabel: 'Levels',
      hasChildren: true,
    },
    {
      id: '5',
      parentId: '4',
      name: 'Level 1',
      shortCode: 'LV1',
      childrensLabel: null,
    },
    {
      id: '6',
      parentId: '1',
      name: 'Nine Elms',
      shortCode: 'NELMS',
      childrensLabel: 'Areas',
      hasChildren: true,
    },
    {
      id: '7',
      parentId: '6',
      name: 'Ticket Office',
      shortCode: 'TICK',
      childrensLabel: 'Rooms',
      hasChildren: true,
    },
    {
      id: '8',
      parentId: '7',
      name: 'Front',
      shortCode: 'FRO',
      childrensLabel: null,
    },
    {
      id: '9',
      parentId: '7',
      name: 'Back',
      shortCode: 'BAC',
      childrensLabel: null,
    },
    {
      id: '10',
      parentId: '4',
      name: 'Level 2',
      shortCode: 'LV2',
      childrensLabel: null,
    },
    {
      id: '11',
      parentId: '4',
      name: 'Level 3',
      shortCode: 'LV3',
      childrensLabel: null,
    },
    {
      id: '12',
      parentId: '4',
      name: 'Level 4',
      shortCode: 'LV4',
      childrensLabel: null,
    },
    {
      id: '13',
      parentId: '4',
      name: 'Level 5',
      shortCode: 'LV5',
      childrensLabel: null,
    },
    {
      id: '14',
      parentId: '4',
      name: 'Level 6',
      shortCode: 'LV6',
      childrensLabel: null,
    },
    {
      id: '15',
      parentId: '4',
      name: 'Level 7',
      shortCode: 'LV7',
      childrensLabel: null,
    },
    {
      id: '16',
      parentId: '4',
      name: 'Level 8',
      shortCode: 'LV8',
      childrensLabel: null,
    },
    {
      id: '17',
      parentId: '4',
      name: 'Level 9',
      shortCode: 'LV9',
      childrensLabel: null,
    },
    {
      id: '18',
      parentId: '4',
      name: 'Level 10',
      shortCode: 'LV10',
      childrensLabel: null,
    },
    {
      id: '19',
      parentId: '4',
      name: 'Level 11',
      shortCode: 'LV11',
      childrensLabel: 'Sides',
      hasChildren: true,
    },
    {
      id: '20',
      parentId: '19',
      name: 'East',
      shortCode: 'EAS',
      childrensLabel: null,
    },
    {
      id: '21',
      parentId: '2',
      name: 'Outside',
      shortCode: 'OUT',
      childrensLabel: 'Areas',
      hasChildren: true,
    },
  ],
};

const renderComponent = () =>
  render(
    <TreeSelector nodes={exampleTree.children} rootNodeId="1">
      {exampleTree}
    </TreeSelector>
  );

describe('TreeSelector', () => {
  it('renders the title and first level of nodes ', () => {
    const { getByText } = renderComponent();

    expect(getByText(/Battersea Power Station/)).toBeInTheDocument();
    expect(getByText(/Nine Elms/)).toBeInTheDocument();
    expect(getByText(/Project Wide/)).toBeInTheDocument();
  });

  it('renders the child nodes after parent is selected', () => {
    const { getByText, queryByText } = renderComponent();

    fireEvent.click(getByText(/Battersea Power Station/));
    expect(getByText(/Concourse/)).toBeInTheDocument();

    fireEvent.click(getByText(/Concourse/));
    expect(queryByText(/Areas/)).toBeInTheDocument();
  });

  it('updates breadcrumbs on selecting nodes', () => {
    const { getByText } = renderComponent();

    fireEvent.click(getByText(/Battersea Power Station/));
    expect(getByText(/Remove Battersea Power Station/)).toBeInTheDocument();

    fireEvent.click(getByText(/Outside/));
    expect(getByText(/Remove Outside/)).toBeInTheDocument();
  });

  it('updates breadcrumbs on clearing all, going back to the first level of nodes', () => {
    const { getByText, queryByText } = renderComponent();

    fireEvent.click(getByText(/Battersea Power Station/));
    expect(getByText(/Remove Battersea Power Station/)).toBeInTheDocument();

    fireEvent.click(getByText(/Outside/));
    expect(getByText(/Remove Outside/)).toBeInTheDocument();

    fireEvent.click(getByText(/Clear all/));
    expect(queryByText(/Remove Battersea Power Station/)).not.toBeInTheDocument();
    expect(queryByText(/Remove Outside/)).not.toBeInTheDocument();
  });
});
