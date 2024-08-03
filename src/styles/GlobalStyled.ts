'use client';

import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  body{
    background: ${theme.bg.primary};
  }
  a {
    text-decoration: none;
    color: ${theme.text.primary};
  }
`;

export default GlobalStyles;
