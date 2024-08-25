import type { Meta, StoryObj } from '@storybook/react';
import HamburgerButtonTypeA from './HamburgerButtonTypeA';

const meta: Meta<typeof HamburgerButtonTypeA> = {
  title: 'atoms/Buttons/HamburgerButtonTypeA',
  component: HamburgerButtonTypeA,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof HamburgerButtonTypeA>;

export const Default: Story = {
  args: {
  },
};
