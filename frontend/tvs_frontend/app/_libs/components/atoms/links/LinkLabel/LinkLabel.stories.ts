import type { Meta, StoryObj } from '@storybook/react';
import LinkLabel from './LinkLabel';

const meta: Meta<typeof LinkLabel> = {
  title: 'atoms/Links/LinkLabel',
  component: LinkLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof LinkLabel>;

export const Primary: Story = {
  args: {
    linkText: "Category",
    linkTo: "*",
  },
};
