import { themeColor } from '@/app/globalTheme.css';
import { createVar, globalStyle, style } from '@vanilla-extract/css';

export const background = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const paper = style({
  position: 'absolute',
  top: '-5%',
});

export const backBtn = style({
  width: '400px',
  height: '85px',
  backgroundColor: '#D9D9D9',
  borderRadius: '45px',
  fontSize: '60px',
  textAlign: 'center',
  lineHeight: '85px',
  marginTop: '30px',
  border: 'none',
  cursor: 'pointer',
});
