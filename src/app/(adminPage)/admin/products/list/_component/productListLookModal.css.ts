import { style } from '@vanilla-extract/css';

export const background = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  zIndex: 100,
});

export const modalWrapper = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
  border: '1px solid #000000',
  zIndex: 101,
});
