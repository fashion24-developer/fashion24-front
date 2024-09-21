import { style } from '@vanilla-extract/css';

export const listTitle = style({
  margin: '50px 60px',
});

export const addButtonContainer = style({
  textAlign: 'end',
  margin: '0 60px',
});

export const contentContainer = style({
  margin: 30,
});

export const addButton = style({
  border: 'none',
  borderRadius: 5,
  cursor: 'pointer',
  padding: '5px 10px',
  backgroundColor: `rgba(221, 5, 5, 0.1)`,
  color: `rgba(221, 5, 5, 1)`,
  ':hover': {
    backgroundColor: `rgba(221, 5, 5, 0.2)`,
    color: `rgba(221, 5, 5, 1)`,
  },
});

export const titleContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr repeat(8, 0.5fr)',
  justifyItems: 'start',
  borderBottom: `1px solid rgba(0, 0, 0, 0.2)`,
  borderTop: `1px solid rgba(0, 0, 0, 0.2)`,
  backgroundColor: 'rgba(242, 244, 246, 1)',
  padding: 10,
});

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const listItem = style({
  textAlign: 'center',
  alignContent: 'center',
  color: '#404040',
});
