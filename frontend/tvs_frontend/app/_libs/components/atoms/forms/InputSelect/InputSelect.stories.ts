import type { Meta, StoryObj } from '@storybook/react';
import { InputSelect } from './InputSelect';

const meta: Meta<typeof InputSelect> = {
  title: 'atoms/Forms/InputSelect',
  component: InputSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof InputSelect>;

export const Default: Story = {
  args: {
    name: "select",
    labelText: "Select",
    isRequired: false,
    selectItems: [
      {valueText: "select1", displayText: "Select 1"},
      {valueText: "select2", displayText: "Select 2"},
    ]
  },
};
