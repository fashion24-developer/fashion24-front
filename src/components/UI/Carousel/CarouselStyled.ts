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
  width: ${({ width }) => width};
  text-align: center;
  flex: none;
  & > :nth-child(1) {
    > :nth-child(1) {
      width: 80%;
      height: ${({ height }) => height};
    }
    text-decoration: none;
    color: ${theme.text.primary};
  }
`;

/**캐러셀 버튼 UI */
export const CarouselButtonBox = styled.div<{ deg: string }>`
  position: relative;
  width: 50px;
  &::after {
    cursor: pointer;
    position: absolute;
    left: 25px;
    top: 50px;
    content: '';
    width: 10px; /* 사이즈 */
    height: 10px; /* 사이즈 */
    border-top: 3px solid #000; /* 선 두께 */
    border-right: 3px solid #000; /* 선 두께 */
    transform: rotate(${({ deg }) => deg}); /* 각도 */
  }
`;
