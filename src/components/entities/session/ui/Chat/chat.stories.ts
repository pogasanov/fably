import type { Meta, StoryObj } from '@storybook/react';

import { Chat } from './Chat';

const meta: Meta<typeof Chat> = {
  title: 'entities/session/Chat',
  component: Chat,
};

export default meta;
type Story = StoryObj<typeof Chat>;

export const Default: Story = {
  args: {
    session_id: "1"
  }
};
