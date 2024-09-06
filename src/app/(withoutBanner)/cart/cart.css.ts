import { themeColor } from '@/app/globalTheme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const pageTitle = style({
  width: '100%',
  height: 100,
  marginTop: '3%',
  backgroundColor: '#f2f32f',
});

export const selectBar = style({
  width: '100%',
  height: 50,
  backgroundColor: '#8f9f9f',
  display: 'flex',
  justifyContent: 'space-between',
});

export const checkBoxContainer = style({
  alignContent: 'center',
});

export const hiddenCheckbox = style({
  display: 'none',
});

export const checkboxLabel = style({
  display: 'inline-block',
  width: '30px',
  height: '30px',
  border: '2px solid #000000',
  position: 'relative',
});

globalStyle(`${hiddenCheckbox}:checked + ${checkboxLabel}::after`, {
  content: 'V',
  color: themeColor.color.main,
  fontSize: '1.3em',
  fontWeight: 'bold',
  width: 'inherit',
  height: 'inherit',
  position: 'absolute',
  paddingLeft: 6,
  left: 0,
  top: 0,
});

export const checkBox = style({
  display: 'flex',
  marginLeft: '3%',
});

export const checkBoxInput = style({
  alignContent: 'center',
  padding: 1,
});

export const unCheckedAll = style({
  alignContent: 'center',
  marginRight: '3%',
});

export const cartListContainer = style({
  width: '100%',
  height: '100% ',
  backgroundColor: '#425ff2',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '3% 0',
});

export const listItem = style({
  width: '80%',
  height: 200,
  backgroundColor: '#992f21',
  marginTop: '2%',
});
