import { createVar, style } from '@vanilla-extract/css';

export const introContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const introTitle = style({
  textAlign: 'center',
  width: '70%',
  cursor: 'pointer',
  padding: '5%',
});

export const introList = style({
  cursor: 'pointer',
  textAlign: 'center',
  width: '50%',
  margin: '1%',
});

export const imageOpacity = createVar();
export const imageVisibility = createVar();

export const imageComponent = style({
  width: '80%',
  height: 'auto',
  transition: 'all 0.3s ease-in-out',
  opacity: `${imageOpacity}`,
});

export const hoverImageComponent = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: `${imageOpacity}`,
  visibility: `${imageOpacity}`,
  transition: 'all 0.3s ease-in-out',
  color: '#000000',
  padding: '10px',
  borderRadius: '5px',
});
