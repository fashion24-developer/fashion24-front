import type { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel';

const meta = {
  title: 'components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    image: [
      {
        image:
          'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
      },
      {
        image:
          'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
      },
      {
        image:
          'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
      },
      {
        image:
          'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
      },
      {
        image:
          'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
      },
      {
        image:
          'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
      },
    ],
    transform: 33.3,
    count: 3,
    type: 'withoutDetail'
  },
};
