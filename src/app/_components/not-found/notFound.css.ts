import { themeColor } from '@/app/globalTheme.css';
import { createVar, globalStyle, style } from '@vanilla-extract/css';

export const background = style({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
});

export const titleDiv = style({
  width: '30vw',
  height: '30vh',
  marginTop: '5vh',
  position: 'relative',
  display: 'block',
});
