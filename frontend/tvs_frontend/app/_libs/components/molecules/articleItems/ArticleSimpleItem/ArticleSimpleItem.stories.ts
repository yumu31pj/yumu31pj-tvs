import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Meta, StoryObj } from '@storybook/react';
import ArticleSimpleItem from "./ArticleSimpleItem";

const meta: Meta<typeof ArticleSimpleItem> = {
  title: 'molecules/ArticleItems/ArticleSimpleItem',
  component: ArticleSimpleItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleSimpleItem>;

export const Primary: Story = {
  args: {
    title: "Article Title Text",
    linkTo: "#",
    date: "2024-08-15",
  },
};
