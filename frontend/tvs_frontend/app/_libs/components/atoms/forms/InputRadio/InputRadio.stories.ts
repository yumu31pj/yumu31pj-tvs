import type { Meta, StoryObj } from '@storybook/react';
import { InputRadio } from './InputRadio';

const meta: Meta<typeof InputRadio> = {
  title: 'atoms/Forms/InputRadio',
  component: InputRadio,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof InputRadio>;

export const Default: Story = {
  args: {
    name: "radio",
    value: "radio1",
    text: "Radio 1"
  },
};
