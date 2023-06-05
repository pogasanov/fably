import type { Meta, StoryObj } from '@storybook/react';

import { ChatSession } from '.';

const meta: Meta<typeof ChatSession> = {
  title: 'pages/ChatSession',
  component: ChatSession,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ChatSession>;

export const Generic: Story = {};
