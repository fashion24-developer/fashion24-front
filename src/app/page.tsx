'use client';

import { ThemeProvider } from 'styled-components';
import Root from './root/page';
import { themeColor } from '@/styles/theme.css';

export default function Home() {
  return (
    <ThemeProvider theme={themeColor}>
      <Root />
    </ThemeProvider>
  );
}
