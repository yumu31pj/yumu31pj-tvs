import type { Meta, StoryObj } from '@storybook/react';
import SimpleTitleH2 from './SimpleTitleH2';

const meta: Meta<typeof SimpleTitleH2> = {
  title: 'atoms/Titles/SimpleTitleH2',
  component: SimpleTitleH2,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SimpleTitleH2>;

export const Default: Story = {
  args: {
    title: "H2 Title Text"
  },
};
