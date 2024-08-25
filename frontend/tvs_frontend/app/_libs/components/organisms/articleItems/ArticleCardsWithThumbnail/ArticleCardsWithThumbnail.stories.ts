import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Meta, StoryObj } from '@storybook/react';
import ArticleCardsWithThumbnail from "./ArticleCardsWithThumbnail";

const meta: Meta<typeof ArticleCardsWithThumbnail> = {
  title: 'organisms/ArticleItems/ArticleCardsWithThumbnail',
  component: ArticleCardsWithThumbnail,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleCardsWithThumbnail>;

export const Primary: Story = {
  args: {
    articles: [
      {
        imageItem: {
          srcSP: "/images/samples/1000x563.png",
          srcWebpSP: "/images/samples/1000x563.png.webp",
          srcPC: "/images/samples/500x281.png",
          srcWebpPC: "/images/samples/500x281.png.webp",
          altText: "alt text",
          breakpoint: 961
        },
        title: "Article Title Text",
        linkTo: "#",
        date: "2024-08-15",
        categories: {
          listItems: [
            {text: "cat1"},
            {text: "cat2"},
          ]
        }
      },
      {
        imageItem: {
          srcSP: "/images/samples/1000x563.png",
          srcWebpSP: "/images/samples/1000x563.png.webp",
          srcPC: "/images/samples/500x281.png",
          srcWebpPC: "/images/samples/500x281.png.webp",
          altText: "alt text",
          breakpoint: 961
        },
        title: "Article Title Text",
        linkTo: "#",
        date: "2024-08-15",
        categories: {
          listItems: [
            {text: "cat1"},
            {text: "cat2"},
          ]
        }
      },
      {
        imageItem: {
          srcSP: "/images/samples/1000x563.png",
          srcWebpSP: "/images/samples/1000x563.png.webp",
          srcPC: "/images/samples/500x281.png",
          srcWebpPC: "/images/samples/500x281.png.webp",
          altText: "alt text",
          breakpoint: 961
        },
        title: "Article Title Text",
        linkTo: "#",
        date: "2024-08-15",
        categories: {
          listItems: [
            {text: "cat1"},
            {text: "cat2"},
          ]
        }
      },
      {
        imageItem: {
          srcSP: "/images/samples/1000x563.png",
          srcWebpSP: "/images/samples/1000x563.png.webp",
          srcPC: "/images/samples/500x281.png",
          srcWebpPC: "/images/samples/500x281.png.webp",
          altText: "alt text",
          breakpoint: 961
        },
        title: "Article Title Text",
        linkTo: "#",
        date: "2024-08-15",
        categories: {
          listItems: [
            {text: "cat1"},
            {text: "cat2"},
          ]
        }
      },
      {
        imageItem: {
          srcSP: "/images/samples/1000x563.png",
          srcWebpSP: "/images/samples/1000x563.png.webp",
          srcPC: "/images/samples/500x281.png",
          srcWebpPC: "/images/samples/500x281.png.webp",
          altText: "alt text",
          breakpoint: 961
        },
        title: "Article Title Text",
        linkTo: "#",
        date: "2024-08-15",
        categories: {
          listItems: [
            {text: "cat1"},
            {text: "cat2"},
          ]
        }
      },
      {
        imageItem: {
          srcSP: "/images/samples/1000x563.png",
          srcWebpSP: "/images/samples/1000x563.png.webp",
          srcPC: "/images/samples/500x281.png",
          srcWebpPC: "/images/samples/500x281.png.webp",
          altText: "alt text",
          breakpoint: 961
        },
        title: "Article Title Text",
        linkTo: "#",
        date: "2024-08-15",
        categories: {
          listItems: [
            {text: "cat1"},
            {text: "cat2"},
          ]
        }
      },
    ]
  },
};
