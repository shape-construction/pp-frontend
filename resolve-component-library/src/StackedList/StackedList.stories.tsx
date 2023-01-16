import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { StackedList } from './StackedList';
import StackedListHeader from '../StackedListHeader';
import StackedListItemTitle from '../StackedListItemTitle';
import StackedListItem from '../StackedListItem';

export default {
  title: 'StackedList',
  component: StackedList,
} as ComponentMeta<typeof StackedList>;

export const Standard = () => (
  <StackedList>
    <StackedListHeader title="Stacked List Title" />
  </StackedList>
);

export const AccountDetailsStackedList = () => {
  const stackedListItems = [
    { id: '1', title: 'Name', description: 'Bot the Builder' },
    { id: '2', title: 'Email', description: 'bot@shape.construction' },
    { id: '3', title: 'Password', description: '************' },
  ];

  return (
    <div className="bg-gray-100 py-3">
      <div className="container mx-auto">
        <StackedList>
          <StackedListHeader title="Account details" />
          {stackedListItems.map(({ id, title, description }) => (
            <StackedListItem key={id}>
              <div className="itemsCenter flex flex-1">
                <StackedListItemTitle title={title} description={description} />
              </div>
              <button type="button" className="text-sm text-indigo-500">
                Edit
              </button>
            </StackedListItem>
          ))}
        </StackedList>
      </div>
    </div>
  );
};
