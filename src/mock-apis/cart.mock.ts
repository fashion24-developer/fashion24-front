import { CartItemType } from '@/types/cart';
import { http, HttpResponse } from 'msw';
import { FancyUnitData } from './fancy.mock';
type cartItemParamsType = {};
type cartItemRequestBodyType = {
  fancyId: number;
  count: number;
};

const newCartItem = new Map();

const cartItemList: CartItemType[] = [
  {
    id: 1,
    fancyId: 1,
    count: 1,
  },
  {
    id: 1,
    fancyId: 2,
    count: 2,
  },
  {
    id: 3,
    fancyId: 3,
    count: 2,
  },
];

const cartMockHandler = [
  http.post<cartItemParamsType, cartItemRequestBodyType>(
    '/api/cart',
    async ({ request, cookies }) => {
      /**auth status code
       * 401 : 미인증 -> 세션만료
       * 403 : 인증만료 -> 재발급
       * 404 : 토큰 없음 -> 로그인 필요
       */
      if (!cookies.authToken) {
        return new HttpResponse(null, {
          status: 404,
          statusText: 'Token not found',
        });
      }
      //토큰 만료되게 안만들어서 만들어야 함
      if (cookies.authToken === 'expired') {
        return new HttpResponse(null, {
          status: 403,
          statusText: 'Token expired',
        });
      }

      const cartItem = await request.json();

      if (!cartItem) {
        return new HttpResponse(null, {
          status: 403,
          statusText: 'item data not found',
        });
      }

      newCartItem.set(cartItem.fancyId, cartItem.count);

      return HttpResponse.json(cartItem, {
        status: 201,
      });
    }
  ),
  http.get('/api/cart/list', () => {
    const cartList = cartItemList.map(cart => {
      const fancy = FancyUnitData.find(fancy => fancy.id === cart.fancyId);
      return {
        ...cart,
        ...fancy,
      };
    });

    return HttpResponse.json(cartList, {
      status: 200,
    });
  }),
];

export default cartMockHandler;
