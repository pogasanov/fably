import type { Meta, StoryObj } from '@storybook/react';

import { Message } from './Message';
import { dayjs } from "@/components/shared/config/dayjs";

const meta: Meta<typeof Message> = {
  title: 'entities/session/Message',
  component: Message,
};

export default meta;
type Story = StoryObj<typeof Message>;

export const Default: Story = {
  args: {
    children: "Hello world",
    type: "user",
    date: dayjs(),
  }
}
