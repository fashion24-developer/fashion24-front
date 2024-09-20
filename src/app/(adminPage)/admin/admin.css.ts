import { themeColor } from '@/app/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const navHeader = style({
  borderBottom: `1px solid rgba(0,0,0,0.2)`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '1% 3%',
});

export const listContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: 25,
  marginLeft: '5%',
  fontSize: 15,
});

export const headerRight = style({
  marginLeft: 'auto',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const backMainLink = style({
  color: themeColor.color.main,
  width: 160,
  cursor: 'pointer',
});

export const profile = style({
  display: 'inline-block',
  border: '1px solid black',
  borderRadius: '50%',
  width: 35,
  height: 35,
  backgroundColor: 'gray',
  marginLeft: '2%',
  cursor: 'pointer',
});

export const sideContainer = style({
  display: 'flex',
  flexDirection: 'row',
});

export const contentContainer = style({
  flex: 5,
});
