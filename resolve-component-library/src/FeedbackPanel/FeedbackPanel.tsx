import React from 'react';

export interface FeedbackPanelProps {
  footer: React.ReactNode;
  logo?: React.ReactNode;
  subtitle: React.ReactNode;
  title: string;
}

export const FeedbackPanel: React.FC<FeedbackPanelProps> = ({
  footer,
  logo,
  subtitle,
  title,
  children,
}) => (
  <article className="flex flex-col justify-center">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      {logo && <div className="h-12 flex justify-center">{logo}</div>}

      <h2 className="mt-6 text-center text-2xl font-semibold text-gray-900 leading-9">{title}</h2>
      <p className="mt-2 text-center text-sm text-gray-600">{subtitle}</p>
    </div>
    {children}
    <footer className="sm:mx-auto sm:w-full sm:max-w-md pt-8">
      <div className="text-sm text-center">{footer}</div>
    </footer>
  </article>
);
