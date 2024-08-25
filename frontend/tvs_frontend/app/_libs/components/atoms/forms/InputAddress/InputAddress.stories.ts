import type { Meta, StoryObj } from '@storybook/react';
import { InputAddress } from './InputAddress';

const meta: Meta<typeof InputAddress> = {
  title: 'atoms/Forms/InputAddress',
  component: InputAddress,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof InputAddress>;

export const Default: Story = {
  args: {
    name: "email",
    labelText: "Your Address",
    placeholder: "Input your address"
  },
};
