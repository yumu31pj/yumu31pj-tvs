import type { Meta, StoryObj } from '@storybook/react';
import SimpleTitleH3 from './SimpleTitleH3';

const meta: Meta<typeof SimpleTitleH3> = {
  title: 'atoms/Titles/SimpleTitleH3',
  component: SimpleTitleH3,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SimpleTitleH3>;

export const Default: Story = {
  args: {
    title: "H3 Title Text"
  },
};
