import { MessageType } from "@/components/shared/api";
import type { Meta, StoryObj } from '@storybook/react';

import { Message } from './Message';

const meta: Meta<typeof Message> = {
  title: 'entities/session/Message',
  component: Message,
};

export default meta;
type Story = StoryObj<typeof Message>;

export const Default: Story = {
  args: {
    children: "Hello world",
    type: MessageType.User,
    date: new Date(),
  }
}
