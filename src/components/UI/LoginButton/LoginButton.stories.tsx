import type { Meta, StoryObj } from '@storybook/react';
import LoginButton from './LoginButton';

const meta = {
  title: 'components/LoginButton',
  component: LoginButton,
  tags: ['autodocs'],
} satisfies Meta<typeof LoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const KAKAO: Story = {
  args: {
    image: '/images/kakao_login.png',
    redirect: '/auth/kakao',
    provider: '카카오',
  },
};

export const NAVER: Story = {
  args: {
    image: '/images/naver_login.png',
    redirect: '/auth/naver',
    provider: '네이버',
  },
};

export const GOOGLE: Story = {
  args: {
    image: '/images/google_login.png',
    redirect: '/auth/google',
    provider: '구글',
  },
};
