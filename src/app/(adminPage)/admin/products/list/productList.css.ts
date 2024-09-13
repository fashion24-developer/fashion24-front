import { themeColor } from '@/app/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const titleContainer = style({
  display: 'grid',
  border: `3px solid ${themeColor.color.main}`,
  padding: 10,
  margin: 20,
  gridTemplateColumns: 'repeat(7, 1fr)',
});

export const listContainer = style({
  border: `3px solid ${themeColor.color.main}`,
  display: 'flex',
  flexDirection: 'column',
  margin: 20,
});
