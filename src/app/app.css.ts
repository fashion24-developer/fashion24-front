import { themeColor } from '@/styles/theme.css';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

globalStyle('a[href]', {
  color: themeColor.color.text,
  textDecoration: 'none',
});
