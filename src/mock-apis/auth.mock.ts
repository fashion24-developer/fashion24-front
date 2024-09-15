import { stat } from 'fs';
import { http, HttpResponse } from 'msw';

export const authHandler = [
  //로그인 성공 후, naver토큰 저장 요청
  http.post('/api/v1/auth/naver/login', ({ request, cookies }) => {
    const url = new URL(request.url);

    const code = url.searchParams.get('code');

    if (cookies.authToken) {
      return HttpResponse.text('이미 로그인 되어있습니다.');
    }

    if (!code)
      return HttpResponse.json(null, {
        status: 403,
        statusText: 'auth code not found',
      });

    return HttpResponse.json(null, {
      headers: new Headers([
        ['set-Cookie', `accessToken=${process.env.TEST_ACCESSTOKEN}`],
        ['set-Cookie', `refreshToken=${process.env.TEST_REFRESHTOKEN}`],
      ]),
      status: 200,
    });
  }),
];
