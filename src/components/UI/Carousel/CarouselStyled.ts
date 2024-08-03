import theme from '@/styles/theme';
import styled from 'styled-components';

export const CarouselContainer = styled.div`
  overflow: hidden;
  background-color: ${theme.bg.primary};
  width: 100%; // width를 늘리면 보여지는 영역이 커짐
  & > :nth-child(1) {
    display: flex;
    transform: 1s;
  }
`;

interface CarouselItemProps {
  width: string;
  height: string;
}

export const CarouselItem = styled.div<CarouselItemProps>`
  width: 33.3%;
  text-align: center;
  flex: none;
  & > :nth-child(1) {
    > :nth-child(1) {
      width: ${({ width }) => width};
      height: ${({ height }) => height};
    }
    text-decoration: none;
    color: ${theme.text.primary};
  }
`;
