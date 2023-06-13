import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '.';

const meta: Meta<typeof Label> = {
  title: 'shared/Label',
  component: Label,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};
