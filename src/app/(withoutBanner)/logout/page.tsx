'use client';

import AUTH from '@/apis/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LogoutPage() {
  const router = useRouter();

  const logoutExecution = async () => {
    const provider = window.localStorage.getItem('provider');
    //지금은 안됨 주석으로 처리
    //await AUTH.logoutAuthApi(provider as string);
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('provider');
    window.localStorage.removeItem('refreshToken');
    router.replace('/');
  };

  useEffect(() => {
    logoutExecution();
  }, [router]);

  return <>loading</>;
}
