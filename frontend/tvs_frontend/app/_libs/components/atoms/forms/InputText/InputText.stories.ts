import type { Meta, StoryObj } from '@storybook/react';
import { InputText } from './InputText';

const meta: Meta<typeof InputText> = {
  title: 'atoms/Forms/InputText',
  component: InputText,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {
  args: {
    name: "password",
    labelText: "Text",
    placeholder: "Input text"
  },
};
