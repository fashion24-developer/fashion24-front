// fancy.css.ts

import {
  style,
  styleVariants,
  globalStyle,
  createVar,
} from '@vanilla-extract/css';

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

//fancy unit images container
export const fancyUnitImagesContainer = style({
  display: 'flex',
  width: '40%',
  height: '100%',
});

export const imagesListItemContainer = style({
  padding: '0 5%',
});

export const opacityVar = createVar();

export const previewListImage = style({
  opacity: opacityVar,
  cursor: 'pointer',
});
