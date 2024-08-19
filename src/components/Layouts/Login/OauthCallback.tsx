'use client';

import AUTH from '@/apis/auth';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const OAuthCallbackPage = ({ provider }: { provider: string }) => {
  const params = useSearchParams();
  const code = params.get('code');

  const authHandler = async () => {
    await AUTH.authLogin(code as string, provider);
  };

  useEffect(() => {
    authHandler();
  }, []);

  return <div>Loading</div>;
};

export default OAuthCallbackPage;
