// fancy.css.ts

import { style, styleVariants, globalStyle } from '@vanilla-extract/css';
import { themeColor } from '@/styles/theme.css';

export const header = style({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '3em',
  paddingTop: '3%',
});

export const banner = style({
  margin: '2% 5%',
  padding: '2% 15%',
  height: '4em',
  border: `2px solid ${themeColor.color.main}`,
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

globalStyle(`${banner} > *:nth-child(1)`, {
  fontSize: '3em',
  position: 'absolute',
  opacity: 0.4,
});

globalStyle(`${banner} > *:nth-child(2)`, {
  fontSize: '2em',
  paddingTop: '0.3em',
  position: 'absolute',
});

export const fancyUnitContainer = style({
  display: 'flex',
  margin: '25px 10%',
  alignItems: 'flex-start',
  gap: '20px',
});

export const imageContainer = style({
  flex: '0 0 auto',
  width: '30%',
  height: '480px',
  maxWidth: '300px',
  aspectRatio: '16 / 9',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '8px',
});

globalStyle(`${imageContainer} > img`, {
  width: '100%',
  objectFit: 'cover',
});

const baseItemBodyContainer = style({
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
});

globalStyle(`${baseItemBodyContainer} > *:first-child`, {
  fontSize: '1.5em',
  fontWeight: 'bold',
  marginBottom: '15px',
});

export const itemBodyContainer = styleVariants({
  left: [
    baseItemBodyContainer,
    {
      alignItems: 'flex-start',
    },
  ],
  right: [
    baseItemBodyContainer,
    {
      alignItems: 'flex-end',
    },
  ],
});
