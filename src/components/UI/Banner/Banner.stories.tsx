import type { Meta, StoryObj } from '@storybook/react';
import Banner from './Banner';
import { fn } from '@storybook/test';

const meta = {
  title: 'components/Banner',
  component: Banner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backGround: { control: 'text' },
    description: { control: 'text' },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Fancy: Story = {
  args: {
    backGround:
      'https://github.com/user-attachments/assets/539b22a8-1da8-4bb0-b865-a8b45f75e5d9',
    description: 'Office Core',
  },
};

export const Whatever: Story = {
  args: {
    backGround:
      'https://github.com/user-attachments/assets/d43988a0-bbdd-40bf-bd36-9ade1bd9a101',
    description: 'Please select the item you want',
  },
};
