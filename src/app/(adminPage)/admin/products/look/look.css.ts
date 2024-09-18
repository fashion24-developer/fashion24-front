import { style } from '@vanilla-extract/css';

export const lookContainer = style({
  margin: 20,
  padding: 10,
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'end',
  marginBottom: 10,
});

export const list = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
});

export const listContent = style({
  display: 'flex',
  flexDirection: 'column',
});
