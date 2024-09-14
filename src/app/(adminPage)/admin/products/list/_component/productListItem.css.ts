import { style } from '@vanilla-extract/css';

export const itemContainer = style({
  display: 'grid',
  padding: 10,
  margin: 20,
  gridTemplateColumns: 'repeat(7, 1fr)',
});
