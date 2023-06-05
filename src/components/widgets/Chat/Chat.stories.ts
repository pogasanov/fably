import type { Meta, StoryObj } from '@storybook/react';

import { Chat } from '.';

const meta: Meta<typeof Chat> = {
  title: 'widgets/Chat',
  component: Chat,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Chat>;

export const Default: Story = {};
