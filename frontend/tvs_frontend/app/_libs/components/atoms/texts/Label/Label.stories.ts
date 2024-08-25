import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'atoms/Texts/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  args: {
    text: "Label Text",
  },
};
