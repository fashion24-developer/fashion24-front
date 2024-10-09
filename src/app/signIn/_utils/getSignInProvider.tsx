import ButtonWithImage from '@/components/Button/ButtonWithImage';

export const getSignInProvider = (provider: string) => {
  const obj: { readonly [key: string]: JSX.Element } = {
    kakao: (
      <ButtonWithImage
        src="/images/kakao_login.webp"
        alt="카카오"
        link={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.AUTH_KAKAO_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URL}&response_type=code`}
        width={700}
        height={65}
      />
    ),
    naver: (
      <ButtonWithImage
        src="/images/naver_login.webp"
        alt="네이버"
        link={`https://nid.naver.com/oauth2.0/authorize?client_id=${process.env.AUTH_NAVER_ID}&redirect_uri=${process.env.NAVER_REDIRECT_URL}&response_type=code&state=test`}
        width={700}
        height={65}
      />
    ),
    google: (
      <ButtonWithImage
        src="/images/google_login.webp"
        alt="구글"
        link={`https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=${process.env.GOOGLE_REDIRECT_URL}&client_id=${process.env.AUTH_GOOGLE_ID}`}
        width={700}
        height={65}
      />
    ),
  } as const;
  return obj[provider];
};
