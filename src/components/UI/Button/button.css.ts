import { themeColor } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const button = style({
  fontWeight: 700,
  border: `1px solid ${themeColor.color.main}`,
  borderRadius: '3em',
  cursor: 'pointer',
  display: 'inline-block',
  lineHeight: 1,
  padding: '5% 10%',
  backgroundColor: `${themeColor.color.bg}`,
  color: `${themeColor.color.text}`,
  ':hover': {
    backgroundColor: '#0ff',
    color: '#ffffff',
  },
});
