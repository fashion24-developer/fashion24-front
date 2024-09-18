import { themeColor } from '@/app/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const titleContainer = style({
  display: 'grid',
  padding: 10,
  margin: 20,
  gridTemplateColumns: 'repeat(9, 1fr)',
  borderBottom: `3px solid ${themeColor.color.main}`,
});

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const listItem = style({
  textAlign: 'center',
  alignContent: 'center',
});
