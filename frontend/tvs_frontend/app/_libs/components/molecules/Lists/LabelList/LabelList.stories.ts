import type { Meta, StoryObj } from '@storybook/react';
import LabelList from './LabelList';
const meta: Meta<typeof LabelList> = {
  title: 'molecules/Lists/LabelList',
  component: LabelList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof LabelList>;

export const Primary: Story = {
  args: {
    listItems: [
      {text: "Label 1"},
      {text: "Label 2"},
      {text: "Label 3"},
    ]
  },
};
