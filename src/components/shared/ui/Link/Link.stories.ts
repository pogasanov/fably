import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '.';

const meta: Meta<typeof Link> = {
  title: 'shared/Link',
  component: Link,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'Button Label',
  },
};
