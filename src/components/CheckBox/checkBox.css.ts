import { themeColor } from '@/app/globalTheme.css';
import { globalStyle, style } from '@vanilla-extract/css';

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
  cursor: 'pointer',
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
