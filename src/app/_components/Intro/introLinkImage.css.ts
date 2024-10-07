import { createVar, style } from '@vanilla-extract/css';

export const imageOpacityVar = createVar();
export const imageVisibilityVar = createVar();

export const linkImageWrapper = style({
  position: 'relative',
});

export const linkImageBtn = style({
  transition: 'all 0.3s ease-in-out',
  opacity: `${imageOpacityVar}`,
});

export const linkImageHover = style({
  position: 'absolute',
  width: '400px',
  top: '-100%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: `${imageOpacityVar}`,
  visibility: `${imageOpacityVar}`,
  transition: 'all 0.3s ease-in-out',
  color: '#000000',
  fontSize: '2em',
});
