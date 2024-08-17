import LoginButton from '../LoginButton';

const getPresetProviderAuth = (provider: string) => {
  const obj: { readonly [key: string]: JSX.Element } = {
    kakao: (
      <LoginButton
        image="/images/kakao_login.png"
        provider="카카오"
        redirect={`${process.env.NEXT_PUBLIC_KAKAO_API_URL as string}/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID as string}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT as string}&response_type=code`}
      />
    ),
    naver: (
      <LoginButton
        image="/images/naver_login.png"
        provider="네이버"
        redirect={`${process.env.NEXT_PUBLIC_NAVER_API_URL as string}/oauth2.0/authorize?client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID as string}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT as string}&response_type=code`}
      />
    ),
    google: (
      <LoginButton
        image="/images/google_login.png"
        provider="구글"
        redirect={`${process.env.NEXT_PUBLIC_GOOGLE_API_URL as string}/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT as string}&response_type=code&scope=${process.env.NEXT_PUBLIC_GOOGLE_SCOPE as string}`}
      />
    ),
  } as const;
  return obj[provider];
};

export default getPresetProviderAuth;
