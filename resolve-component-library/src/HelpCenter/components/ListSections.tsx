import React, { FC } from 'react';
import { ChevronRightIcon } from '../../Icons/solid';
import Stack from '../../Stack';
import type { Section } from '../types';
import Skeleton from '../../Skeleton';

export const ListSectionsSkeleton: React.FC = () => (
  <div className="bg-gray-50 p-6">
    <Stack direction="column" spacing="4" aria-label="sections-skeleton">
      <Skeleton className="h-7 w-full bg-gray-400" />
      <Stack.Item aria-label="article">
        <article className="space-y-2">
          <Skeleton className="h-10 w-full" />
        </article>
      </Stack.Item>
      <Stack.Item aria-label="article">
        <article className="space-y-2">
          <Skeleton className="h-10 w-full" />
        </article>
      </Stack.Item>
    </Stack>
  </div>
);

export type ListSectionsProps = {
  title: string;
  sections: Section[];
};

export const ListSections: FC<ListSectionsProps> = ({ title, sections }) => (
  <div className="bg-gray-50 p-6">
    <Stack direction="column" spacing="4" aria-label="sections">
      <h4 className="text-base font-medium leading-6 text-gray-900">{title}</h4>
      {sections.map((section) => (
        <a
          key={section.id}
          aria-label="section"
          target="_blank"
          rel="noreferrer"
          href={section.html_url}
          className="w-full text-left"
        >
          <Stack.Item
            aria-label="section"
            className="flex w-full flex-row justify-between rounded-lg border bg-white p-3"
          >
            {/* TODO: Support this (title, icon and variant) on the StackItem component */}
            <span className="text-sm font-medium leading-5 text-gray-900">{section.name}</span>
            <ChevronRightIcon className="h-5 w-5 text-gray-400" />
          </Stack.Item>
        </a>
      ))}
    </Stack>
  </div>
);
