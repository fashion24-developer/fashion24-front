import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

export const container = style({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '60%',
  height: 500,
});
