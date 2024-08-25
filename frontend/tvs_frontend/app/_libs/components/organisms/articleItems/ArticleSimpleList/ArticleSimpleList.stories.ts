import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Meta, StoryObj } from '@storybook/react';
import ArticleSimpleList from "./ArticleSimpleList";

const meta: Meta<typeof ArticleSimpleList> = {
  title: 'organisms/ArticleItems/ArticleSimpleList',
  component: ArticleSimpleList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleSimpleList>;

export const Primary: Story = {
  args: {
    articles: [
      {
        title: "Article Title Text",
        linkTo: "#",
        date: "2024-08-15",
      },
      {
        title: "Article Title Text",
        linkTo: "#",
        date: "2024-08-15",
      },
      {
        title: "Article Title Text",
        linkTo: "#",
        date: "2024-08-15",
      },
      {
        title: "Article Title Text",
        linkTo: "#",
        date: "2024-08-15",
      },
      {
        title: "Article Title Text",
        linkTo: "#",
        date: "2024-08-15",
      },
      {
        title: "Article Title Text",
        linkTo: "#",
        date: "2024-08-15",
      },
      {
        title: "Article Title Text",
        linkTo: "#",
        date: "2024-08-15",
      },
    ]
  },
};
