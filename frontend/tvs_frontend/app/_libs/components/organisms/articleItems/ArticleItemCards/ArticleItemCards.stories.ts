import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Meta, StoryObj } from '@storybook/react';
import ArticleItemCards from './ArticleItemCards';

const meta: Meta<typeof ArticleItemCards> = {
  title: 'organisms/ArticleItems/ArticleItemCards',
  component: ArticleItemCards,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleItemCards>;

export const Primary: Story = {
  args: {
    articles: [
      {title: "Article Title Text",
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
      {title: "Article Title Text",
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
      {title: "Article Title Text",
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
      {title: "Article Title Text",
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
      {title: "Article Title Text",
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
      {title: "Article Title Text",
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
      {title: "Article Title Text",
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
    ]
    
  },
};
