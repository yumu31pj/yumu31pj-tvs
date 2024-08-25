import type { Meta, StoryObj } from '@storybook/react';
import { InputEmail } from './InputEmail';

const meta: Meta<typeof InputEmail> = {
  title: 'atoms/Forms/InputEmail',
  component: InputEmail,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof InputEmail>;

export const Default: Story = {
  args: {
    name: "email",
    labelText: "E-mail Address",
    placeholder: "Input your e-mail"
  },
};
