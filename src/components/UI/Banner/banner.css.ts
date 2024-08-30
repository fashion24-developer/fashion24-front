import { themeColor } from '@/app/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const banner = style({
  margin: '2% 5%',
  padding: '2% 15%',
  border: `2px solid ${themeColor.color.main}`,
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
});

export const bannerChild1 = style({
  fontSize: '2em',
  position: 'relative',
  opacity: '0.2',
});

export const bannerChild2 = style({
  fontSize: '2em',
  paddingTop: '0.3em',
  position: 'absolute',
});
