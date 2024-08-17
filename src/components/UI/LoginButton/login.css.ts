import { style } from '@vanilla-extract/css';

export const loginBUttonContainer = style({
  position: 'relative',
  height: '100px',
  marginTop: '1%',
  paddingBottom: '5%',
  cursor: 'pointer',
});

export const responsiveImageWrapper = style({
  position: 'relative',
  width: '100%',
  height: 'auto', // 높이를 자동으로 설정하여 가로 너비에 맞게 조정
  marginTop: '1%',
  paddingBottom: '5%', // 16:9 비율을 유지하려면 이 값을 조정
});
