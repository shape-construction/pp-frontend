import React from 'react';
import { Badge } from './Badge';
import { BadgeProps, SHAPE, SIZE, THEME } from './Badge.types';

export default {
  title: 'Design System/Badge',
  component: Badge,
  args: {
    label: 'My Badge',
  },
};

export const Default = (args: BadgeProps) => <Badge {...args} />;

export const Shape = (args: BadgeProps) => (
  <div className="space-x-2">
    <Badge {...args} label="Basic" shape={SHAPE.BASIC} />
    <Badge {...args} label="Rounded" shape={SHAPE.ROUNDED} />
  </div>
);

export const Size = (args: BadgeProps) => (
  <div className="space-x-2">
    <Badge {...args} label="Small" size={SIZE.SMALL} />
    <Badge {...args} label="Large" size={SIZE.LARGE} />
  </div>
);

export const Theme = (args: BadgeProps) => (
  <div className="space-x-2">
    <Badge {...args} label="Blue" theme={THEME.BLUE} />
    <Badge {...args} label="Green" theme={THEME.GREEN} />
    <Badge {...args} label="Pink" theme={THEME.PINK} />
    <Badge {...args} label="Yellow" theme={THEME.YELLOW} />
    <Badge {...args} label="Gray" theme={THEME.GRAY} />
    <Badge {...args} label="Teal" theme={THEME.TEAL} />
    <Badge {...args} label="White" theme={THEME.WHITE} />
  </div>
);

export const Dot = (args: BadgeProps) => (
  <div className="space-x-2">
    <Badge {...args} label="False" withDot={false} />
    <Badge {...args} label="True" withDot />
  </div>
);

export const RemoveButton = (args: BadgeProps) => (
  <div className="space-x-2">
    <Badge {...args} label="False" withRemoveButton={false} />
    <Badge {...args} label="True" withRemoveButton />
  </div>
);

export const Truncate = () => (
  <div className="w-40">
    <Badge label="VeryLongVeryLongVeryLongWord" truncate />
  </div>
);

export const AllBadges = (args: BadgeProps) => (
  <div className={`grid grid-cols-${Object.keys(THEME).length}`}>
    {[false, true].map((withRemoveButton) =>
      [false, true].map((withDot) =>
        Object.values(SHAPE).map((shape) =>
          Object.values(SIZE).map((size) =>
            Object.values(THEME).map((theme) => (
              <div key={`${withRemoveButton}-${withDot}-${shape}-${size}-${theme}`}>
                <Badge
                  {...args}
                  shape={shape}
                  size={size}
                  theme={theme}
                  withDot={withDot}
                  withRemoveButton={withRemoveButton}
                />
              </div>
            ))
          )
        )
      )
    )}
  </div>
);
