export type AuthProvider = {
  provider: 'naver' | 'kakao' | 'google';
};

export type AuthType = {
  accessToken: string;
  refreshToken: string;
};
