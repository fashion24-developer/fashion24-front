'use client';

import theme from '@/styles/Theme';
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

export const CarouselContainer = styled.div`
  overflow: hidden;
  background-color: #f00;
  width: 100%; // width를 늘리면 보여지는 영역이 커짐
  & > :nth-child(1) {
    display: flex;
    transform: 1s;
  }
`;

export const CarouselItem = styled.div`
  width: 33.3%;
  text-align: center;
  flex: none;
  & > :nth-child(1) {
    width: 80%;
    height: 100%;
  }
`;
