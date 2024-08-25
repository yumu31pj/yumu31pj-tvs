import type { Meta, StoryObj } from '@storybook/react';
import FAQText from './FAQText';

const meta: Meta<typeof FAQText> = {
  title: 'atoms/Texts/FAQText',
  component: FAQText,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof FAQText>;

export const Question: Story = {
  args: {
    question: "This is a question text"
  },
};

export const Answer: Story = {
  args: {
    answer: "This is an answer text"
  },
};
