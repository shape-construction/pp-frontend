import React from 'react';
import { Meta } from '@storybook/react';
import { Link, LinkProps } from './Link';
import { colors } from './link-config';
import { LinkIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

const pseudoStates = ['default', 'hover', 'focus', 'disabled'];

type AnchorProps = LinkProps<'a'>;

export default {
  component: Link,
  subcomponents: {},
  title: 'Design System/Link',
} as Meta<AnchorProps>;

export const Colors = (args: AnchorProps) => (
  <div className="flex flex-col items-center gap-4 p-3">
    {colors.map((color) => {
      if (color === 'white') {
        return (
          <div key={color} className="mt-3 rounded-md bg-gray-800 p-3">
            <Link {...args} href="https://www.shape.construction/" key={color} color={color}>
              This is a link to Shape Construction
            </Link>
          </div>
        );
      }

      return (
        <div key={color}>
          <Link {...args} href="https://www.shape.construction/" key={color} color={color}>
            This is a link to Shape Construction
          </Link>
        </div>
      );
    })}
  </div>
);

export const Icons = (args: AnchorProps) => (
  <div className="flex flex-col items-center gap-4 p-3">
    {colors.map((color) => {
      if (color === 'white') {
        return (
          <div key={color} className="mt-3 rounded-md bg-gray-800 p-3">
            <div key={color} className="flex flex-row items-center gap-4">
              <Link
                {...args}
                href="https://www.shape.construction/"
                color={color}
                leadingIcon={QuestionMarkCircleIcon}
              >
                This is a link with leading icon
              </Link>
              <Link
                {...args}
                href="https://www.shape.construction/"
                color={color}
                trailingIcon={QuestionMarkCircleIcon}
              >
                This is a link with trailing icon
              </Link>
              <Link
                {...args}
                href="https://www.shape.construction/"
                color={color}
                trailingIcon={QuestionMarkCircleIcon}
                leadingIcon={QuestionMarkCircleIcon}
              >
                This is a link with leading and trailing icons
              </Link>
            </div>
          </div>
        );
      }

      return (
        <div key={color}>
          <div key={color} className="flex flex-row items-center gap-4">
            <Link
              {...args}
              href="https://www.shape.construction/"
              color={color}
              leadingIcon={QuestionMarkCircleIcon}
            >
              This is a link with leading icon
            </Link>
            <Link
              {...args}
              href="https://www.shape.construction/"
              color={color}
              trailingIcon={QuestionMarkCircleIcon}
            >
              This is a link with trailing icon
            </Link>
            <Link
              {...args}
              href="https://www.shape.construction/"
              color={color}
              trailingIcon={QuestionMarkCircleIcon}
              leadingIcon={QuestionMarkCircleIcon}
            >
              This is a link with leading and trailing icons
            </Link>
          </div>
        </div>
      );
    })}
  </div>
);

const AllContent: React.FC<AnchorProps> = ({ color, ...args }) => (
  <>
    {pseudoStates.map((state) => (
      <div key={color + state} className="m-4 flex items-center gap-4">
        <Link
          {...args}
          href="https://www.shape.construction/"
          key={color}
          color={color}
          disabled={state === 'disabled'}
          id={state}
        >
          Link
        </Link>
      </div>
    ))}
    {pseudoStates.map((state) => (
      <div key={color + state} className="m-4 flex items-center gap-4">
        <Link
          {...args}
          href="https://www.shape.construction/"
          key={color}
          color={color}
          disabled={state === 'disabled'}
          leadingIcon={LinkIcon}
          id={state}
        >
          Link
        </Link>
      </div>
    ))}
    {pseudoStates.map((state) => (
      <div key={color + state} className="m-4 flex items-center gap-4">
        <Link
          {...args}
          href="https://www.shape.construction/"
          key={color}
          color={color}
          disabled={state === 'disabled'}
          trailingIcon={LinkIcon}
          id={state}
        >
          Link
        </Link>
      </div>
    ))}
    {pseudoStates.map((state) => (
      <div key={color + state} className="m-4 flex items-center gap-4">
        <Link
          {...args}
          href="https://www.shape.construction/"
          key={color}
          color={color}
          disabled={state === 'disabled'}
          id={state}
          underline="none"
        >
          Link
        </Link>
      </div>
    ))}
  </>
);

export const All = (args: AnchorProps) => (
  <div className="flex w-full flex-col items-center gap-4 p-3">
    {colors.map((color) => {
      if (color === 'white') {
        return (
          <div key={color} className="mt-3 flex flex-row rounded-md bg-gray-800">
            <AllContent {...args} color={color} />
          </div>
        );
      }

      return (
        <div key={color} className="flex flex-row">
          <AllContent {...args} color={color} />
        </div>
      );
    })}
  </div>
);
All.parameters = {
  pseudo: {
    hover: '#hover',
    focus: '#focus',
  },
};
