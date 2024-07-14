'use client';

import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  body{
    background: ${theme.bg.primary};
  }
`;

export default GlobalStyles;
