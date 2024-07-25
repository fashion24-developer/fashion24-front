'use client';

import theme from '@/styles/theme';
import styled from 'styled-components';

export const Banner = styled.div`
  margin: 2% 5%;
  padding: 2% 15%;
  height: 4em;
  border: 2px solid ${theme.main.primary};
  align-items: center;
  display: flex;
  flex-direction: column;
  :nth-child(1) {
    font-size: 2em;
    position: absolute;
    opacity: 0.2;
  }
  :nth-child(2) {
    font-size: 2em;
    padding-top: 0.3em;
    position: absolute;
  }
`;
