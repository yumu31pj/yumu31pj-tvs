import type { Meta, StoryObj } from '@storybook/react';
import LinkLabelList from './LinkLabelList';

const meta: Meta<typeof LinkLabelList> = {
  title: 'molecules/Lists/LinkLabelList',
  component: LinkLabelList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof LinkLabelList>;

export const Primary: Story = {
  args: {
    listItems: [
      {linkText: "Link 1", linkTo: "#"},
      {linkText: "Link 2", linkTo: "#"},
      {linkText: "Link 3", linkTo: "#"},
    ]
  },
};
