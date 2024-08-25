import type { Meta, StoryObj } from '@storybook/react';
import { InputZip } from './InputZip';

const meta: Meta<typeof InputZip> = {
  title: 'atoms/Forms/InputZip',
  component: InputZip,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof InputZip>;

export const Default: Story = {
  args: {
    name: "password",
    labelText: "Zip Code",
    placeholder: "Input your zip code"
  },
};
