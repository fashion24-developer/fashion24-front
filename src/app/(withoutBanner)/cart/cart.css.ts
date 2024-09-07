import { themeColor } from '@/app/globalTheme.css';
import { globalStyle, style } from '@vanilla-extract/css';
import { ECDH } from 'crypto';

export const pageTitle = style({
  fontSize: '2.5em',
  color: '#DD0505',
  width: '100%',
  height: 100,
  marginTop: '3%',
  alignContent: 'end',
  padding: '0 0 10px 10%',
});

export const selectBar = style({
  width: '100%',
  height: 50,
  backgroundColor: '#F2F2F2',
  display: 'flex',
  justifyContent: 'space-between',
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
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

//CartItem css
export const listItem = style({
  width: '80%',
  height: 200,
  backgroundColor: '#F2F2F2',
  marginTop: '2%',
  display: 'flex',
  flexDirection: 'row',
});

export const checkBoxContainer = style({
  marginLeft: 10,
  marginTop: 10,
});

export const itemImage = style({
  width: 150,
  backgroundColor: '#777277',
  margin: 10,
});

export const itemContentContainer = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});
export const itemHeaderContainer = style({
  display: 'flex',
  flexDirection: 'row',
  margin: 10,
  flexGrow: 0,
});

export const itemTitle = style({
  fontSize: '2em',
  alignContent: 'end',
  fontWeight: 'bold',
});

export const itemSubTitle = style({
  alignContent: 'end',
});

export const itemOptions = style({
  display: 'flex',
  flexDirection: 'row',
  margin: 10,
  flexGrow: 1,
});

export const optionChangeButton = style({
  width: 130,
  fontSize: '1em',
  border: '1px solid #000000',
  borderRadius: 10,
  color: '#000000',
  padding: 5,
  backgroundColor: '#ffffff',
  margin: 10,
  cursor: 'pointer',
  ':hover': {
    borderColor: '#a1a1a1',
    backgroundColor: '#a1a1a1',
    color: '#ffffff',
  },
});

export const contentEnd = style({
  display: 'flex',
  width: 100,
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const itemClose = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginTop: 5,
  marginRight: 10,
});

export const closeButton = style({
  cursor: 'pointer',
  textAlign: 'center',
  borderRadius: 10,
  width: 20,
  height: '100%',
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export const itemPrice = style({
  fontSize: '1.5em',
  marginBottom: 5,
  marginRight: 10,
  textAlign: 'end',
  alignContent: 'end',
});
