// carousel.css.ts

import { style, createVar } from '@vanilla-extract/css';
import { themeColor } from '@/app/globalTheme.css';

export const CarouselItem = createVar();
export const CarouselItemChild = createVar();
export const isCarouselButton = createVar();

//케러셀 베이스 컨테이너
export const baseCarouselContainer = style({
  display: `${isCarouselButton}`,
  width: '100%',
  position: 'relative',
});

//케러셀 베이스 컨테이너 하위 {overflow : hidden} 하는 컨테이너
export const CarouselContainer = style([
  baseCarouselContainer,
  {
    overflow: 'hidden',
  },
]);

//ref 값이 들어가는 태그 스타일
export const CarouselRef = style({
  display: 'flex',
});

//캐러셀 각 아이템 최 상위 컨테이너 스타일
export const CarouselItemStyle = style([
  {
    boxSizing: 'border-box',
    padding: '0 10px',
    flex: `0 0 ${CarouselItem}`,
  },
]);

//링크 태그 스타일
export const carouselItemLink = style({
  textDecoration: 'none',
  color: themeColor.color.text,
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'translateY(-3px)',
  },
});

//이미지 태그 wrapper style
export const carouselItemImageWrapper = style({
  position: 'relative',
  width: '100%',
  height: `${CarouselItemChild}`,
  paddingTop: '100%',
  marginBottom: '10px',
  overflow: 'hidden',
});

export const carouselItemName = style({
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '5px',
});

export const carouselItemPrice = style({
  fontSize: '16px',
  color: themeColor.color.text,
  marginBottom: '10px',
});

export const carouselItemTags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '5px',
});

export const carouselItemTag = style({
  fontSize: '12px',
  padding: '3px 8px',
  borderRadius: '12px',
  border: '1px solid #000',
  backgroundColor: themeColor.color.basic,
  color: themeColor.color.text,
});

export const carouselContent = style({
  overflow: 'hidden',
});

export const carouselButton = style({
  transform: 'translateY(15vh)',
  zIndex: 1,
  cursor: 'pointer',
  background: 'white',
  border: '1px solid #ddd',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'background-color 0.3s',
  ':hover': {
    backgroundColor: '#f0f0f0',
  },
});
