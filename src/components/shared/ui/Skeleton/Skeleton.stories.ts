import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '.';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Round: Story = {
  args: {
    className: "h-12 w-12 rounded-full",
  }
};

export const Square: Story = {
  args: {
    className: "h-4 w-[250px]",
  }
};
