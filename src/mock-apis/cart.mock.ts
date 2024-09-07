import { CartItemType } from '@/types/cart';
import { http, HttpResponse } from 'msw';
import { FancyUnitData } from './fancy.mock';
type cartItemParamsType = {};
type cartItemRequestBodyType = {
  fancyId: number;
  options: {
    optionId: number;
    subOptionId: number;
  }[];
  count: number;
};

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
    async ({ request }) => {
      const { count, fancyId, options } = await request.json();

      if (!count || !fancyId || !options) {
        return new HttpResponse(null, {
          status: 403,
          statusText: 'item data not found',
        });
      }

      return HttpResponse.json(null, {
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
