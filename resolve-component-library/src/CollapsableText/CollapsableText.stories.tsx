import React from 'react';

import { CollapsableTextProps } from './CollapsableText';
import CollapsableText from './index';

export default {
  title: 'Design System/CollapsableText',
  component: CollapsableText,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export const Default = (args: CollapsableTextProps) => <CollapsableText {...args} />;
Default.args = {
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec malesuada dolor. ' +
    'Quisque fermentum eros in orci pellentesque, non maximus erat iaculis. Vivamus in lectus ' +
    'dictum, gravida felis et, bibendum ligula. Pellentesque habitant morbi tristique senectus ' +
    'et netus et malesuada fames ac turpis egestas. Maecenas scelerisque enim id nisi faucibus ' +
    'rhoncus. Donec sodales tempus faucibus. Nulla rutrum est diam, at aliquet diam auctor nec. ' +
    'Sed vel bibendum tortor, id hendrerit ipsum. Integer nec condimentum augue. Nullam neque ' +
    'nisi, condimentum non libero in, tempor varius nisi. Nunc egestas sodales vulputate. Duis ' +
    'congue quam ipsum, sed egestas turpis sollicitudin ut.',
  title: 'Description',
};
