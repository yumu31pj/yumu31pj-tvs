import type { Meta, StoryObj } from '@storybook/react';
import { InputLabel } from './InputLabel';

const meta: Meta<typeof InputLabel> = {
  title: 'atoms/Forms/InputLabel',
  component: InputLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof InputLabel>;

export const Default: Story = {
  args: {
    text: "label",
    htmlFor: "Label",
    isActive: false
  },
};
