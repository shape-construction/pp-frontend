import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export type PageBodyProps = ComponentProps<'div'>;

const PageBody = React.forwardRef<HTMLDivElement, PageBodyProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(
      'mx-auto h-full w-full flex-1 bg-gray-100 p-4 md:overflow-y-auto md:p-8',
      className
    )}
    {...props}
  />
));

PageBody.displayName = 'Page.Body';

export default PageBody;
