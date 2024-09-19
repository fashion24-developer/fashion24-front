import { themeColor } from '@/app/globalTheme.css';
import { createVar, style } from '@vanilla-extract/css';

export const container = style({
  flex: 1,
  maxWidth: 360,
  height: '100dvh',
  borderRight: `1px solid rgba(0,0,0,0.2)`,
});

export const listContainer = style({
  margin: '25px 5px',
});

export const pickListVar = createVar();
export const list = style({
  padding: 10,
  borderRadius: 12,
  color: pickListVar,
  transition: 'all 0.2s ease-in-out',
  ':hover': {
    backgroundColor: 'rgba(194, 194, 194, 0.25)',
  },
});
