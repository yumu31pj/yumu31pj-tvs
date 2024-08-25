import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Meta, StoryObj } from '@storybook/react';
import FAQList from './FAQList';

const meta: Meta<typeof FAQList> = {
  title: 'molecules/lists/FAQList',
  component: FAQList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof FAQList>;

export const Primary: Story = {
  args: {
    faqItems: [
      {
        question: "This is a question text",
        answer: "This is an answer text<br>This is an answer text<br>This is an answer text"
      },
      {
        question: "This is a question text",
        answer: "This is an answer text<br>This is an answer text<br>This is an answer text"
      },
      {
        question: "This is a question text",
        answer: "This is an answer text<br>This is an answer text<br>This is an answer text"
      },
      {
        question: "This is a question text",
        answer: "This is an answer text<br>This is an answer text<br>This is an answer text"
      },
      {
        question: "This is a question text",
        answer: "This is an answer text<br>This is an answer text<br>This is an answer text"
      },
    ]
  },
};
