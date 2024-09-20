import { themeColor } from '@/app/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const listContainer = style({
  margin: 10,
});

export const title = style({
  border: `3px solid ${themeColor.color.main}`,
  margin: 20,
  padding: 10,
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
});

export const content = style({
  border: `3px solid ${themeColor.color.main}`,
  padding: 10,
  margin: 20,
});
