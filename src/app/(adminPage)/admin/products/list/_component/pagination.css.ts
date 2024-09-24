import { style } from '@vanilla-extract/css';

export const paginationContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: '20px',
});

export const pageButton = style({
  width: '30px',
  height: '30px',
  margin: '0 5px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});
