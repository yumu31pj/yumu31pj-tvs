import type { Meta, StoryObj } from '@storybook/react';
import { InputCheckbox } from './InputCheckbox';

const meta: Meta<typeof InputCheckbox> = {
  title: 'atoms/Forms/InputCheckbox',
  component: InputCheckbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof InputCheckbox>;

export const Default: Story = {
  args: {
    id: "checkbox",
    name: "Checkbox",
    value: "Checkbox1",
    text: "Checkbox1"
  },
};
