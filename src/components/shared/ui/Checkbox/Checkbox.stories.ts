import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxWithLabel } from '.';

const meta: Meta<typeof CheckboxWithLabel> = {
  title: 'shared/Checkbox',
  component: CheckboxWithLabel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CheckboxWithLabel>;

export const Default: Story = {
  args: {
    children: 'Button Label',
  },
};
