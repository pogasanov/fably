import type { Meta, StoryObj } from '@storybook/react';

import { EmptyPage } from '.';

const meta: Meta<typeof EmptyPage> = {
  title: 'pages/EmptyPage',
  component: EmptyPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof EmptyPage>;

export const Default: Story = {};
