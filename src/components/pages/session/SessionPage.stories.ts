import type { Meta, StoryObj } from '@storybook/react';

import { SessionPage } from '.';

const meta: Meta<typeof SessionPage> = {
  title: 'pages/SessionPage',
  component: SessionPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SessionPage>;

export const Default: Story = {};
