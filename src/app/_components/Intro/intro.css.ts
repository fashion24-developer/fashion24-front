import { createVar, style } from '@vanilla-extract/css';

export const introContainer = style({
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const titleWrapper = style({
  margin: '100px 0px',
});

export const linkImageWrapper = style({
  margin: 15,
  textAlign: 'center',
});
