import { MessageType } from "@/components/shared/api";
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
    messages: [
      {
        message: "Hello world",
        type: MessageType.User,
        date: new Date(),
      },
      {
        message: "Hello world",
        type: MessageType.Narrator,
        date: new Date(),
      },
      {
        message: "Hello world",
        type: MessageType.User,
        date: new Date(),
      }
    ]
  }
};
