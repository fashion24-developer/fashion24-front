import { createVar, globalStyle, style } from '@vanilla-extract/css';

export const background = style({
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
});

export const container = style({
  position: 'fixed',
  width: 300,
  height: 250,
  backgroundColor: '#ffffff',
  borderRadius: 10,
  zIndex: 2,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const titleWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  marginTop: 10,
  marginLeft: 10,
  alignItems: 'flex-end',
});

export const name = style({
  fontSize: '1.5em',
});

//option color선택
export const colorWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  marginTop: 10,
  marginLeft: 10,
});

export const colorVar = createVar();

export const color = style({
  width: 35,
  height: 35,
  borderRadius: '50%',
  backgroundColor: colorVar,
  margin: 5,
  cursor: 'pointer',
});

//option comboBox
export const comboBoxWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
});

globalStyle('ul', {
  listStyle: 'none',
  paddingLeft: 0,
});

export const comboBoxSelect = style({
  listStyle: 'none',
  paddingLeft: 0,
});

export const comboBoxContainer = style({
  position: 'relative',
  display: 'inline-block',
  width: '80%',
  margin: 3,
});

export const comboBoxButton = style({
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#fff',
  cursor: 'pointer',
  textAlign: 'left',
});

export const comboBoxList = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#fff',
  zIndex: 1000,
  maxHeight: '200px',
  overflowY: 'auto',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

export const comboBoxItem = style({
  padding: '10px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#f0f0f0',
  },
});

export const backgroundDropdown = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
});
