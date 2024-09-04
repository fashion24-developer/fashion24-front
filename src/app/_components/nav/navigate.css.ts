import { themeColor } from '@/app/globalTheme.css';
import { createVar, globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: '#ffffff',
});

export const widthVar = createVar();
export const xPositionVar = createVar();

export const navigate = style({
  backgroundColor: '#ffffff',
  borderLeft: `4px solid ${themeColor.color.main}`,
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  transition: '0.4s ease',
  color: '#202020',
  height: '100%',
  width: 280,
  transform: `translateX(${xPositionVar})`,
  zIndex: 99,
});

export const content = style({
  padding: '40px 40px 0 20px',
  width: '100%',
});

export const button = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: 10,
  bottom: 0,
  right: 10,
  zIndex: 100,
  cursor: 'pointer',
});

export const closeButton = style({
  cursor: 'pointer',
  fontSize: '1.5em',
  padding: '5%',
  color: themeColor.color.main,
  fontWeight: 'bold',
});

export const hamburger = style({
  display: 'inline-block',
  boxSizing: 'border-box',
  position: 'relative',
  width: '30px',
  height: '5px',
  backgroundColor: themeColor.color.main,
  margin: '2px 10px',
  borderRadius: '10px',
});

globalStyle('li', {
  listStyle: 'none',
  padding: '10px 0',
  borderBottom: '1px solid #f0f0f0',
});

globalStyle('a', {
  textDecoration: 'none',
  color: '#202020',
});

export const navList = style({
  color: '#202020',
  ':hover': {
    color: themeColor.color.main,
  },
});

export const background = style({
  position: 'fixed',
  width: '100dvw',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.2)',
  zIndex: 98,
});
