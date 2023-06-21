import type { Meta, StoryObj } from '@storybook/react';

import { SignupPage } from '.';

const meta: Meta<typeof SignupPage> = {
  title: 'pages/LoginPage',
  component: SignupPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SignupPage>;

export const Default: Story = {};
