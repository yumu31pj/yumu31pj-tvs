import type { Meta, StoryObj } from '@storybook/react';
import { InputTextArea } from './InputTextarea';

const meta: Meta<typeof InputTextArea> = {
  title: 'atoms/Forms/InputTextArea',
  component: InputTextArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof InputTextArea>;

export const Default: Story = {
  args: {
    name: "password",
    labelText: "Textarea",
    // placeholder: "Input your text in this textarea"
  },
};
