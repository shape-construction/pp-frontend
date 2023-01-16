import React, { ComponentProps } from 'react';
import classNames from 'classnames';
import { ArrowLeftIcon, ChevronLeftIcon } from '../Icons/outline';
import { IconButton } from '../Button';
import { twMerge } from 'tailwind-merge';
import Link from '../Link';

export type PageHeaderProps = ComponentProps<'header'> & {
  /**
   * Back button title
   */
  backNavigationTitle?: string;
  /**
   * Component to be rendered below the title section
   */
  bottomSection?: React.ReactNode;
  /**
   * Boolean that controls if there is back navigation
   */
  hasBackNavigation?: boolean;
  /**
   * Function executed when clicked on the back button
   */
  onBackNavigation?: () => void;
  /**
   * @deprecated
   * Component to be rendered on the right section
   */
  rightActions?: React.ReactNode;
  /**
   * Component to be rendered on the right section
   */
  rightSection?: React.ReactNode;
  /**
   * String that populates the title at the top of the screen
   */
  title: string;
  /**
   * Element wrapping title
   */
  titleAs?: React.FC;
};

const PageHeader = React.forwardRef<HTMLElement, PageHeaderProps>(
  (
    {
      backNavigationTitle,
      bottomSection,
      className,
      hasBackNavigation,
      onBackNavigation,
      rightActions,
      rightSection,
      title,
      titleAs: TitleWrapper = 'h1' as const,
      ...props
    },
    ref
  ) => {
    const BackButton = hasBackNavigation && (
      <div className="row-start-1 flex items-center">
        <div className="block sm:hidden">
          <IconButton
            icon={ArrowLeftIcon}
            variant="text"
            color="secondary"
            onClick={onBackNavigation}
            size="md"
          />
        </div>
        <div className="hidden text-sm font-medium leading-5 sm:flex">
          <Link
            color="secondary"
            as="button"
            leadingIcon={ChevronLeftIcon}
            onClick={onBackNavigation}
            underline="none"
          >
            {backNavigationTitle}
          </Link>
        </div>
      </div>
    );

    const Title = (
      <div
        className={classNames('col-start-1 row-start-1 flex items-center', {
          'col-span-2 row-start-2 md:col-span-1': hasBackNavigation,
        })}
      >
        <TitleWrapper className="text-lg font-medium leading-7 text-gray-900 md:text-xl md:font-medium md:leading-7">
          {title}
        </TitleWrapper>
      </div>
    );

    const RigthSection = (rightSection || rightActions) && (
      <div
        className={classNames(
          'col-start-2 row-start-1 flex place-items-end items-start justify-end',
          {
            'md:row-start-2': hasBackNavigation,
          }
        )}
      >
        {rightSection || rightActions}
      </div>
    );

    const BottomSection = bottomSection && (
      <div className="col-span-2 col-start-1 row-span-2">{bottomSection}</div>
    );

    return (
      <header
        ref={ref}
        className={twMerge(
          classNames('grid auto-cols-auto gap-2 bg-white p-4 shadow-sm md:px-8 md:py-6', className)
        )}
        {...props}
      >
        {BackButton}
        {RigthSection}
        {Title}
        {BottomSection}
      </header>
    );
  }
);

PageHeader.displayName = 'Page.Header';

export default PageHeader;
