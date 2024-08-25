import type { Meta, StoryObj } from '@storybook/react';
import { InputPhone } from './InputPhone';

const meta: Meta<typeof InputPhone> = {
  title: 'atoms/Forms/InputPhone',
  component: InputPhone,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof InputPhone>;

export const Default: Story = {
  args: {
    name: "password",
    labelText: "Your Phone Number",
    placeholder: "Input your Phone number"
  },
};
