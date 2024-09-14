import { style } from '@vanilla-extract/css';

export const container = style({
  margin: 20,
});

export const formContainer = style({
  backgroundColor: 'lightgray',
  display: 'grid',
  gap: 10,
  padding: 10,
  gridTemplateColumns: '100px 5fr',
  alignItems: 'start',
});

export const description = style({
  padding: 5,
  resize: 'none',
  width: '100%',
  height: 150,
});

export const submitButtonContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'end',
  marginTop: 20,
});

export const submitButton = style({
  padding: 10,
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  borderRadius: 5,
  ':hover': {
    backgroundColor: 'gray',
  },
});
