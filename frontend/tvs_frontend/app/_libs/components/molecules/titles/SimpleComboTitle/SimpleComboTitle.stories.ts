import type { Meta, StoryObj } from '@storybook/react';
import SimpleComboTitle from './SimpleComboTitle';

const meta: Meta<typeof SimpleComboTitle> = {
  title: 'molecules/Titles/SimpleComboTitle',
  component: SimpleComboTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SimpleComboTitle>;

export const Primary: Story = {
  args: {
    titleJP: "h2タイトルです",
    titleEN: "This is h2 title"
  },
};
