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
        [
          'set-Cookie',
          'accessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhY2Nlc3NUb2tlbiIsInVzZXJJZCI6MSwidXNlclJvbGUiOiJBRE1JTiIsImlhdCI6MTcyNjM5ODA3MiwiZXhwIjoxNzI2NDg0NDcyfQ.XA6dr-1Xmd__R4yn4KDd2eK1PM6MgoiXQPMLG6htGwA"',
        ],
        [
          'set-Cookie',
          'refreshToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJ1c2VySWQiOjEsInVzZXJSb2xlIjoiQURNSU4iLCJpYXQiOjE3MjYzOTgwNzIsImV4cCI6MTcyNzAwMjg3Mn0.OaVQ8mToW4wsChkSdsz1CxdZledjpfhoUABXE91H4Ik"',
        ],
      ]),
      status: 200,
    });
  }),
];
