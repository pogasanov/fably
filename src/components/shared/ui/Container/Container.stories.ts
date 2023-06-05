import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '.';

const meta: Meta<typeof Container> = {
  title: 'shared/Container',
  component: Container,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: 'Container content',
  },
};
