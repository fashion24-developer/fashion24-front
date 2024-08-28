import { themeColor } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const cartHeaderTitle = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#ff0000',
  margin: '5% auto 1% 5%',
});

export const cartContentHeader = style({
  display: 'flex',
  backgroundColor: '#f2f2f2',
  padding: '1% 2%',
});

export const cartCheckRemoveText = style({
  marginLeft: 'auto',
  cursor: 'pointer',
});

/*장바구니 요소 스타일 */

export const cartItemListContainer = style({
  margin: '5% 10%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const cartItemContainer = style({
  display: 'flex',
  backgroundColor: '#f2f2f2',
  width: '100%',
  margin: '2% 0px',
});
