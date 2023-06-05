import type { Meta, StoryObj } from '@storybook/react';

import { SubmitMessageForm } from '.';

const meta: Meta<typeof SubmitMessageForm> = {
  title: 'features/SubmitMessageForm',
  component: SubmitMessageForm,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SubmitMessageForm>;

export const Generic: Story = {};
