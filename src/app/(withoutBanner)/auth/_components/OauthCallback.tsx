'use client';

import AUTH from '@/apis/auth';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const OAuthCallbackPage = ({ provider }: { provider: string }) => {
  const [isToken, setIsToken] = useState(false);
  const [token, setToken] = useState({
    accessToken: '',
    refreshToken: '',
  });
  const router = useRouter();
  const code = useSearchParams().get('code');

  const authHandler = async () => {
    const response = await AUTH.authLogin(code as string, provider);
    setIsToken(true);
    setToken(() => {
      return {
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      };
    });
  };

  useEffect(() => {
    authHandler();
  }, [router]);

  useEffect(() => {
    if (isToken) {
      router.push('/');
    }
    const authData = {
      provider: provider,
      token: token,
    };
    window.localStorage.setItem('auth', JSON.stringify(authData));
  }, [isToken]);

  return <div>Loading</div>;
};

export default OAuthCallbackPage;
