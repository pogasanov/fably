import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from '.';

const meta: Meta<typeof Sidebar> = {
  title: 'shared/Sidebar',
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};
