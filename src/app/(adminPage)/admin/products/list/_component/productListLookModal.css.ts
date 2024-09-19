import { themeColor } from '@/app/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const closeButton = style({
  position: 'absolute',
  top: 10,
  right: 10,
  cursor: 'pointer',
  border: 'none',
  backgroundColor: '#ffffff',
  padding: '5px 8px',
  borderRadius: '50%',
  transition: 'all 0.2s ease-in-out',
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export const lookListWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: 10,
});

export const lookItem = style({
  padding: '5px 8px',
  border: `1px solid ${themeColor.color.main}`,
  borderRadius: 5,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: themeColor.color.main,
    color: 'white',
  },
});

export const submitButtonContainer = style({
  textAlign: 'center',
  margin: '10px 0px',
});

export const submitButton = style({
  width: 100,
  backgroundColor: themeColor.color.bg,
  borderRadius: 5,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});
