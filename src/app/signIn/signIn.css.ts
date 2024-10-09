import { style } from '@vanilla-extract/css';

export const signInContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

export const logoWrapper = style({
  display: 'inline-block',
  marginBottom: 60,
});
