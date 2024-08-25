import type { Meta, StoryObj } from '@storybook/react';
import SimpleTitleH4 from './SimpleTitleH4';

const meta: Meta<typeof SimpleTitleH4> = {
  title: 'atoms/Titles/SimpleTitleH4',
  component: SimpleTitleH4,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SimpleTitleH4>;

export const Default: Story = {
  args: {
    title: "H4 Title Text"
  },
};
