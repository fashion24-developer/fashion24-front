import { themeColor } from '@/app/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const countBoxContainer = style({
  display: 'flex',
  border: '1px solid #000',
  borderRadius: '5px',
  margin: '1rem',
  cursor: 'pointer',
});

export const plusMinus = style({
  cursor: 'pointer',
  textAlign: 'center',
  margin: 'auto 0',
  width: '1rem',
});

export const countBox = style({
  width: '2rem',
  textAlign: 'center',
  backgroundColor: `#f0f0f0`,
  borderRight: '2px solid #999999',
  borderLeft: '2px solid #999999',
});

export const plusButton = style({
  position: 'relative',
  width: '1rem',
  height: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '::before': {
    content: '""',
    position: 'absolute',
    width: '60%',
    height: '2px',
    backgroundColor: '#000',
  },
  '::after': {
    content: '""',
    position: 'absolute',
    height: '60%',
    width: '2px',
    backgroundColor: '#000',
  },
});

export const minusButton = style({
  position: 'relative',
  width: '1rem',
  height: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '::before': {
    content: '""',
    position: 'absolute',
    width: '60%',
    height: '2px',
    backgroundColor: '#000',
  },
});
