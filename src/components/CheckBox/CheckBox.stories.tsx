import type { Meta, StoryObj } from '@storybook/react';
import CheckBox from './CheckBox';

const meta = {
  title: 'components/CheckBox',
  component: CheckBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: function Renders(args) {
    return <CheckBox {...args} />;
  },
};
