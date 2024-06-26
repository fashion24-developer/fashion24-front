'use client';

import StyledComponentsRegistry from '@/common/Registry';
import MockTestComponent from '@/components/MockTestComponent';
import GlobalStyles from '@/styles/GlobalStyled';
import theme from '@/styles/Theme';
import { ThemeProvider } from 'styled-components';

export default function Home() {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <MockTestComponent />
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
