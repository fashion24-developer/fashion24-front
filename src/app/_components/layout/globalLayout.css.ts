import { style } from '@vanilla-extract/css';

export const globalLayoutContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

export const globalLayoutContent = style({
  minWidth: 1180,
  maxWidth: 1200,
});
