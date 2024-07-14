'use client';

import StyledComponentsRegistry from '@/common/Registry';
import GlobalStyles from '@/styles/GlobalStyled';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import Root from './root/page';

export default function Home() {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
