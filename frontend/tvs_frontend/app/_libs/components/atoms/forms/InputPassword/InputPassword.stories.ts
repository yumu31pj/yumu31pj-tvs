import type { Meta, StoryObj } from '@storybook/react';
import { InputPassword } from './InputPassword';

const meta: Meta<typeof InputPassword> = {
  title: 'atoms/Forms/InputPassword',
  component: InputPassword,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof InputPassword>;

export const Default: Story = {
  args: {
    name: "password",
    labelText: "Your Password",
    // placeholder: "Input your Password"
  },
};
