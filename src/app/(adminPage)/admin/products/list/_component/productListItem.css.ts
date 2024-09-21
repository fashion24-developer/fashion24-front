import { createVar, style } from '@vanilla-extract/css';

export const itemContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr repeat(8, 0.5fr)',
  padding: 10,
  transition: 'all 0.2s ease-in-out',
  borderRadius: 15,
  ':hover': {
    backgroundColor: `rgba(194, 194, 194, 0.25)`,
  },
});

export const contentItem = style({
  fontSize: 12,
  textAlign: 'start',
  alignContent: 'center',
});

export const changeEventList = style({
  display: 'flex',
  flexDirection: 'column',
  fontSize: 12,
  padding: 0,
  margin: 0,
});

export const optionTagContainer = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const optionItem = style({
  backgroundColor: `rgba(0,0,0,0.15)`,
  borderRadius: 5,
  padding: '2px 3px',
  margin: 2,
});

export const tagItem = style({
  padding: '2px 3px',
  margin: 2,
});

export const buttonBgVar = createVar();
export const buttonColorVar = createVar();
export const contentButton = style({
  backgroundColor: buttonBgVar,
  textAlign: 'center',
  border: 'none',
  padding: '2px 4px',
  alignContent: 'center',
  borderRadius: 10,
  cursor: 'pointer',
  color: buttonColorVar,
  margin: '0 5px',
});
