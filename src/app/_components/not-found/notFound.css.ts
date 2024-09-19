import { themeColor } from '@/app/globalTheme.css';
import { createVar, globalStyle, style } from '@vanilla-extract/css';

export const background = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const content = style({
  width: '80%',
  height: '80%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const paper = style({
  position: 'absolute',
  top: '0',
});

export const message_404 = style({});

export const message_notfound = style({});
