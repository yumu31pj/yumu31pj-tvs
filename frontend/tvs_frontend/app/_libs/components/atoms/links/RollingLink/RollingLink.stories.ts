import type { Meta, StoryObj } from '@storybook/react';
import RollingLink from './RollingLink';

const meta: Meta<typeof RollingLink> = {
  title: 'atoms/Links/RollingLink',
  component: RollingLink,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof RollingLink>;

export const Primary: Story = {
  args: {
    linkText: "About",
    linkTo: "*",
  },
};
