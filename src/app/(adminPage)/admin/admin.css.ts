import { background } from '@/app/_components/nav/navigate.css';
import { themeColor } from '@/app/globalTheme.css';
import { globalStyle, style } from '@vanilla-extract/css';
import { color } from 'framer-motion';

export const headerContainer = style({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: themeColor.color.main,
});

export const navigate = style({
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  border: `2px solid ${themeColor.color.main}`,
});

export const navItem = style({
  listStyle: 'none',
  padding: 10,
  border: `2px solid ${themeColor.color.main}`,
  margin: 1,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: themeColor.color.main,
    color: '#ffffff',
  },
});

export const sideContainer = style({
  display: 'flex',
  flexDirection: 'row',
});

export const contentContainer = style({
  flex: 5,
});
