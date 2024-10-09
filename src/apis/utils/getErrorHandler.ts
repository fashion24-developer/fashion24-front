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

/** 자동 로그아웃 함수
 *
 * refactor : alert모달로 변경
 * refactor : localStorage에서 cookie로 저장 변경
 */
function autoLogout(errorMessage: string) {
  alert(errorMessage);
  const provider = window.localStorage.getItem('provider');
  AUTH.logoutAuthApi(provider as string);
  window.localStorage.removeItem('accessToken');
  window.localStorage.removeItem('refreshToken');
  window.localStorage.removeItem('provider');
  window.location.href = '/';
}

export function getAuthErrorHandler({ statusText }: ErrorType) {
  const authError = {
    'invalid token': autoLogout('유효하지 않은 회원 정보 입니다.'),
    'jwt must be provided': '토큰이 제공되지 않은 경우 -> 로그인 이동',
    'jwt error': autoLogout('유효하지 않은 회원 정보 입니다.'),
    'invalid signature': autoLogout('유효하지 않은 회원 정보 입니다.'),
    'token missmatch': autoLogout('유효하지 않은 회원 정보 입니다.'),
    'jwt expired': async () => {
      const newAccessToken = await AUTH.refreshAuth();
      window.localStorage.setItem('accessToken', newAccessToken.accessToken);
    },
    'Failed to generate new access token':
      autoLogout('서버에러가 발생 했습니다.'),
  } as const;
  return authError[statusText];
}
