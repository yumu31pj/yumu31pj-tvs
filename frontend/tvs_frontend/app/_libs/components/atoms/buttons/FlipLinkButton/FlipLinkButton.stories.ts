import type { Meta, StoryObj } from '@storybook/react';
import FlipLinkButton from './FlipLinkButton';

const meta: Meta<typeof FlipLinkButton> = {
  title: 'atoms/Buttons/FlipLinkButton',
  component: FlipLinkButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof FlipLinkButton>;

export const Default: Story = {
  args: {
    linkText: "To About",
    linkTo: "#"
  },
};
