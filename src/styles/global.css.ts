import { createVar, style } from '@vanilla-extract/css';

export const displayVar = createVar();
export const flexDirectionVar = createVar();
export const justifyContentVar = createVar();
export const alignItemsVar = createVar();

export const globalDisplay = style({
  display: displayVar,
  flexDirection: flexDirectionVar,
  justifyContent: justifyContentVar,
  alignItems: alignItemsVar,
});

export const imageWrapper = style({
  width: '100%',
  height: '100%',
  paddingTop: '100%',
  marginBottom: '10px',
  position: 'relative',
});
