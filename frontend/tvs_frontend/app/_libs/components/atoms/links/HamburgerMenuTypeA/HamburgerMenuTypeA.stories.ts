import type { Meta, StoryObj } from '@storybook/react';
import HamburgerMenuTypeA from './HamburgerMenuTypeA';

const meta: Meta<typeof HamburgerMenuTypeA> = {
  title: 'atoms/Links/HamburgerMenuTypeA',
  component: HamburgerMenuTypeA,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof HamburgerMenuTypeA>;

export const Default: Story = {
  args: {
    linkItems: [
      {linkText: "Top", linkTo: "/"},
      {linkText: "About", linkTo: "/about/"},
      {linkText: "Github", linkTo: "https://github.com/", isExternal: true}
    ]
  },
};
