import type { StorybookConfig } from '@storybook/nextjs';
const path = require('path');

const config: StorybookConfig = {
  webpackFinal: async config => {
    if (config.resolve?.alias !== undefined)
      config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    return config;
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-essentials',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
