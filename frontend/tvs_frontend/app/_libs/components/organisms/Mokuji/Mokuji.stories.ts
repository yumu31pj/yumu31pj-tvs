import type { Meta, StoryObj } from '@storybook/react';
import Mokuji from './Mokuji';

const meta: Meta<typeof Mokuji> = {
  title: 'organisms/Mokuji',
  component: Mokuji,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Mokuji>;

export const Default: Story = {
  args: {
    mokujiList: [
      {
        title: "H2 Title 1",
        linkTo: "#h2-1",
        tagType: "h2",
      },
      {
        title: "H3 Title 1",
        linkTo: "#h3-1",
        tagType: "h3",
      },
      {
        title: "H4 Title 1",
        linkTo: "#h4-1",
        tagType: "h4",
      },
      {
        title: "H3 Title 2",
        linkTo: "#h3-2",
        tagType: "h3",
      },
      {
        title: "H4 Title 4-2",
        linkTo: "#h4-2",
        tagType: "h4",
      },
      {
        title: "H2 Title 2",
        linkTo: "#h2-2",
        tagType: "h2",
      },
      {
        title: "H3 Title 3",
        linkTo: "#h3-3",
        tagType: "h3",
      },
      {
        title: "H4 Title 3",
        linkTo: "#h4-3",
        tagType: "h4",
      },
    ]
  }
};
