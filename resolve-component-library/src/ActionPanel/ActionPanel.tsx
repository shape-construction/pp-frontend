import React, { FC } from 'react';

export interface ActionPanelProps {
  actions?: React.ReactNode;
  content: React.ReactNode;
}

export const ActionPanel: FC<ActionPanelProps> = ({ actions, content }: ActionPanelProps) => (
  <div className="rounded-md border border-gray-200 bg-white p-4">
    <div className="sm:flex sm:items-start sm:justify-between">
      <article className="text-sm text-gray-900">{content}</article>
      {actions && (
        <footer className="mt-5 flex shrink-0 flex-wrap items-center gap-4 sm:mt-0 sm:ml-6">
          {actions}
        </footer>
      )}
    </div>
  </div>
);
