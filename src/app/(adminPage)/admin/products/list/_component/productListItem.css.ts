import { themeColor } from '@/app/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const itemContainer = style({
  display: 'grid',
  padding: 10,
  margin: 20,
  gridTemplateColumns: 'repeat(9, 1fr)',
  borderBottom: `3px solid ${themeColor.color.option}`,
});

export const contentItem = style({
  textAlign: 'center',
  alignContent: 'center',
});

export const changeEventList = style({
  display: 'flex',
  flexDirection: 'column',
  fontSize: 12,
  padding: 0,
  margin: 0,
});

export const contentButton = style({
  textAlign: 'center',
  alignContent: 'center',
  backgroundColor: `#ffffff`,
  padding: 5,
  borderRadius: 5,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: themeColor.color.option,
    transition: 'all 0.2s ease-in-out',
    color: `#ffffff`,
  },
});
