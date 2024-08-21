// fancy.css.ts

import { themeColor } from '@/styles/theme.css';
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

/*=== Fancy Unit CSS ===*/

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

//fancy unit body
export const bodyContentContainer = style({
  width: '50%',
  margin: '4% auto auto 3%',
});

export const bodyTitleBox = style({
  fontSize: '2em',
  fontWeight: 'bold',
});

export const bodyTitleCategory = style({
  marginTop: 'auto',
  fontSize: '1.5em',
});

export const bodyDescriptionBox = style({
  margin: '2% 1%',
});

export const optionItemTitle = style({
  margin: 'auto 0px',
  fontSize: '1em',
});

export const opacityOptionVar = createVar();

export const optionItemBox = style({
  margin: '1%',
  fontSize: '1em',
  padding: '2px 10px',
  border: `1px solid #000000`,
  borderRadius: '10px',
  cursor: 'pointer',
  opacity: opacityOptionVar,
  marginBottom: 'auto',
});

export const resultContainer = style({
  width: '100%',
  height: 'auto',
  marginTop: '25%',
});

export const priceBox = style({
  display: 'flex',
  justifyContent: 'flex-end',
  fontSize: '2em',
});

export const submitButtonBoxContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginTop: 'auto',
});

export const buttonColorVar = createVar();

export const submitButtonBox = style({
  textAlign: 'center',
  width: '10vw',
  height: 'auto',
  padding: '10px 20px',
  border: `1px solid #000000`,
  margin: '1%',
  cursor: 'pointer',
  fontSize: '1em',
  textWrap: 'balance',
  color: buttonColorVar,
});

//bottom description
export const bottomContainer = style({
  margin: '2% 10%',
});

export const bottomContentDescription = style({
  margin: '2% 0',
});
