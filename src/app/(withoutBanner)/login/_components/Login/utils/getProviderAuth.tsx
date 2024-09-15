import LoginButton from '@/components/LoginButton/LoginButton';

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
        redirect={`https://nid.naver.com/oauth2.0/authorize?client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL}&response_type=code&state=test`}
      />
    ),
    google: (
      <LoginButton
        image="/images/google_login.png"
        provider="구글"
        redirect={`${process.env.NEXT_PUBLIC_GOOGLE_API_URL as string}/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT as string}&response_type=code&scope=${process.env.NEXT_PUBLIC_GOOGLE_SCOPE as string}`}
      />
    ),
    // naver: (
    //   <LoginButton
    //     image="/images/naver_login.png"
    //     provider="네이버 mock 테스트"
    //     redirect={`/auth/naver/callback?code=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhY2Nlc3NUb2tlbiIsInVzZXJJZCI6MSwidXNlclJvbGUiOiJVU0VSIiwiaWF0IjoxNzI2MzkxODMzLCJleHAiOjE3MjY0NzgyMzN9.49rd_ce4IHqMWnsrlZmq0c5rMFJg-m7PLKTsZgKmQnI`}
    //   />
    // ),
  } as const;
  return obj[provider];
};

export default getPresetProviderAuth;
