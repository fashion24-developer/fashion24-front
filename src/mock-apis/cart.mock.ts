import { http, HttpResponse } from 'msw';
type cartItemParamsType = {};
type cartItemRequestBodyType = {
  fancyId: number;
  count: number;
};

const newCartItem = new Map();

const cartMock = [
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
];

export default cartMock;
