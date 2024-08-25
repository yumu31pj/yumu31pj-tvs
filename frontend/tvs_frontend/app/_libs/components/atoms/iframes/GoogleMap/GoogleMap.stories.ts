import type { Meta, StoryObj } from '@storybook/react';
import GoogleMap from './GoogleMap';

const meta: Meta<typeof GoogleMap> = {
  title: 'atoms/iFrames/GoogleMap',
  component: GoogleMap,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof GoogleMap>;

export const Primary: Story = {
  args: {
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13293.527609915782!2d130.3621232!3d33.5953942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541924d02e6b64b%3A0xb79cd978d2ed54c2!2z44G_44Ga44G7UGF5UGF544OJ44O844Og56aP5bKh!5e0!3m2!1sja!2sjp!4v1723934526835!5m2!1sja!2sjp",
    width: 600,
    height: 450
  },
};
