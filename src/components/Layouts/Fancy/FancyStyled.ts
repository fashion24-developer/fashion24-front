'use client';

import theme from '@/styles/theme';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3em;
  padding-top: 3%;
`;

export const Banner = styled.div`
  margin: 2% 5%;
  padding: 2% 15%;
  height: 4em;
  border: 2px solid ${theme.main.primary};
  align-items: center;
  display: flex;
  flex-direction: column;
  :nth-child(1) {
    font-size: 3em;
    position: absolute;
    opacity: 0.4;
  }
  :nth-child(2) {
    font-size: 2em;
    padding-top: 0.3em;
    position: absolute;
  }
`;

export const FancyUnitContainer = styled.div`
  display: flex;
  margin: 25px 10%;
`;

export const ImageContainer = styled.div`
  background-color: #cccccc;
  padding: 3px;
  & > :nth-child(1) {
  }
`;

interface ItemBodyContainerProps {
  position: 'left' | 'right';
}

export const ItemBodyContainer = styled.div<ItemBodyContainerProps>`
  & > :nth-child(1) {
    margin: 5%;
    text-align: ${({ position }) => position};
  }
`;
