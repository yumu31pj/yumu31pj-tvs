import type { Meta, StoryObj } from '@storybook/react';
import ResponsiveImage from './ResponsiveImage';

const meta: Meta<typeof ResponsiveImage> = {
  title: 'atoms/Images/ResponsiveImage',
  component: ResponsiveImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ResponsiveImage>;

export const Default: Story = {
  args: {
    srcSP: "/images/common/brand_logo.png",
    srcWebpPC: "/images/common/brand_logo.png.webp",
    srcPC: "/images/common/brand_logo.png",
    srcWebpSP: "/images/common/brand_logo.png.webp",
    altText: "Storybook"
  },
};
