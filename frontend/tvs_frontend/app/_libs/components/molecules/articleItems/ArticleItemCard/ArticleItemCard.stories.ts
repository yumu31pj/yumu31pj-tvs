import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Meta, StoryObj } from '@storybook/react';
import ArticleItemCard from './ArticleItemCard';

const meta: Meta<typeof ArticleItemCard> = {
  title: 'molecules/ArticleItems/ArticleItemCard',
  component: ArticleItemCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleItemCard>;

export const Primary: Story = {
  args: {
    title: "Article Title Text",
    linkTo: "#",
    date: "2024-08-15",
    categories: {
      listItems: [
        {linkText: "Link 1", linkTo: "#"},
        {linkText: "Link 2", linkTo: "#"},
        {linkText: "Link 3", linkTo: "#"},
      ]
    }
  },
};
