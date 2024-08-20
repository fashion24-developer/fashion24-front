'use client';

import AUTH from '@/apis/auth';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const OAuthCallbackPage = ({ provider }: { provider: string }) => {
  const [isToken, setIsToken] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const code = params.get('code');

  const authHandler = async () => {
    await AUTH.authLogin(code as string, provider);
    setIsToken(true);
  };

  useEffect(() => {
    authHandler();
  }, []);

  useEffect(() => {
    if (isToken) {
      router.push('/');
    }
  });

  return <div>Loading</div>;
};

export default OAuthCallbackPage;
