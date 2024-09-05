import AUTH from '../auth';

//나중에 모달 형식의 에러 화면으로 변경
interface ErrorType {
  statusText:
    | 'invalid token'
    | 'jwt must be provided'
    | 'jwt error'
    | 'invalid signature'
    | 'token missmatch'
    | 'jwt expired'
    | 'Failed to generate new access token';
}

function autoLogout() {
  //로그아웃 api추가
  window.localStorage.removeItem('auth');
}

export function getAuthErrorHandler({ statusText }: ErrorType) {
  const authError = {
    'invalid token': () => {},
    'jwt must be provided': '토큰이 제공되지 않은 경우 -> 로그인 이동',
    'jwt error': 'jwt에러 -> 로그아웃 시키기',
    'invalid signature': '유효하지 않은 서명 -> 로그아웃 시키기',
    'token missmatch': '토큰 불칭 -> 로그아웃 시키기',
    'jwt expired': async () => {
      const newAccessToken = await AUTH.refreshAuth();
      window.localStorage.setItem('accessToken', newAccessToken.accessToken);
    },
    'Failed to generate new access token': '500번에러',
  } as const;
  return authError[statusText];
}
