import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta = {
  title: 'components/Header',
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    src: 'https://github.com/user-attachments/assets/61c10265-ed61-4e39-aa3b-e19f0258c287',
  },
};
