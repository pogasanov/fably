import type { Meta, StoryObj } from '@storybook/react';

import { Landing } from '.';

const meta: Meta<typeof Landing> = {
  title: 'pages/Landing',
  component: Landing,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Landing>;

export const Generic: Story = {};
