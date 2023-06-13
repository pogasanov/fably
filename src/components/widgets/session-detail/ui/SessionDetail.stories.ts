import type { Meta, StoryObj } from '@storybook/react';

import { SessionDetail } from '.';

const meta: Meta<typeof SessionDetail> = {
  title: 'widgets/session-detail/SessionDetail',
  component: SessionDetail,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SessionDetail>;

export const Default: Story = {};
