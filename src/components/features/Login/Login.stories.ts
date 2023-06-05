import type { Meta, StoryObj } from '@storybook/react';

import { Login } from '.';

const meta: Meta<typeof Login> = {
  title: 'features/Login',
  component: Login,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Login>;

export const Generic: Story = {};
