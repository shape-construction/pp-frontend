import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import PageBody from './PageBody';
import PageHeader from './PageHeader';

type Components = {
  Header: typeof PageHeader;
  Body: typeof PageBody;
};

export type PageProps = ComponentProps<'div'>;

const PageRoot = React.forwardRef<HTMLDivElement, PageProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge('flex h-full flex-col', className)} {...props} />
));

PageRoot.displayName = 'Page';

export const Page: typeof PageRoot & Components = Object.assign(PageRoot, {
  Header: PageHeader,
  Body: PageBody,
});
