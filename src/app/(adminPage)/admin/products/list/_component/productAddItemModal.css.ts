import { style } from '@vanilla-extract/css';

export const imageContainer = style({
  width: 250,
  height: 350,
  backgroundColor: 'lightgray',
});

export const layoutContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

export const formContainer = style({
  marginLeft: 10,
  width: 500,
  height: 350,
});

export const formLabel = style({
  width: 120,
});

export const formInputBox = style({
  width: '100%',
  outline: 'none',
  padding: '5px 0px 5px 5px',
  marginBottom: 10,
});

export const formDescription = style({
  width: '100%',
  height: 100,
  resize: 'none',
  paddingLeft: 5,
  paddingTop: 5,
  outline: 'none',
  marginBottom: 10,
});

export const formGroup = style({
  display: 'flex',
});

export const submitButtonContainer = style({
  textAlign: 'end',
});

export const submitButton = style({
  border: 'none',
  backgroundColor: `rgba(221, 5, 5, 0.1)`,
  color: `rgba(221, 5, 5, 1)`,
  borderRadius: 5,
  padding: `5px 10px`,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: `rgba(221, 5, 5, 0.2)`,
  },
});
