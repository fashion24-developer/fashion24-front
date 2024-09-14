import { themeColor } from '@/app/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  flex: 1,
  maxWidth: 300,
  height: '100dvh',
  backgroundColor: themeColor.color.basic,
});

export const list = style({
  padding: 10,
  margin: 5,
  border: `1px solid ${themeColor.color.basic}`,
  ':hover': {
    border: `1px solid ${themeColor.color.main}`,
    color: themeColor.color.main,
  },
});
