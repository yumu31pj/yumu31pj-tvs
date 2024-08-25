import type { Meta, StoryObj } from '@storybook/react';
import LinkButtonSizeFixed from './LinkButtonSizeFixed';

const meta: Meta<typeof LinkButtonSizeFixed> = {
  title: 'atoms/Links/LinkButtonSizeFixed',
  component: LinkButtonSizeFixed,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof LinkButtonSizeFixed>;

export const Internal: Story = {
  args: {
    linkText: "Innernal Link",
    linkAddress: "*",
    isExternal: false
  },
};

export const External: Story = {
  args: {
    linkText: "External Link",
    linkAddress: "*",
    isExternal: true
  },
};
