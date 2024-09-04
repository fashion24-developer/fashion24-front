import type { Meta, StoryObj } from '@storybook/react';
import CountBox from './CountBox';
import { useState } from '@storybook/preview-api';

const meta = {
  title: 'components/CountBox',
  component: CountBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CountBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const countBox: Story = {
  args: {
    count: 1,
    setCount: () => {},
  },
  render: function Renders(args) {
    const [count, setCount] = useState(args.count);
    return <CountBox {...args} count={count} setCount={setCount} />;
  },
};
