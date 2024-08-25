import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Meta, StoryObj } from '@storybook/react';
import HamburgerNavigationTypeA from './HamburgerNavigationTypeA';

const meta: Meta<typeof HamburgerNavigationTypeA> = {
  title: 'organisms/HamburgerNavigation/HamburgerNavigationTypeA',
  component: HamburgerNavigationTypeA,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof HamburgerNavigationTypeA>;

export const Default: Story = {
  args: {
    linkItems: [
      {linkText: "Top", linkTo: "/"},
      {linkText: "About", linkTo: "/about/"},
      {linkText: "Github", linkTo: "https://github.com/", isExternal: true}
    ]
  },
};
