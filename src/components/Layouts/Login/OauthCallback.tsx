'use client';

import { useEffect, useState } from 'react';

const OAuthCallbackPage = ({ provider }: { provider: string }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // 서버 사이드 렌더링 시 아무것도 렌더링하지 않음
  }

  // 클라이언트 사이드에서만 실행되는 로직
  const handleCallback = () => {
    if (window) {
      // window 객체를 사용하는 로직
      console.log(`Handling ${provider} callback`);
    }
  };

  useEffect(() => {
    handleCallback();
  }, []);

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  //axios 인가 코드 전달

  return (
    <div>
      <h1>{provider} OAuth Callback</h1>
    </div>
  );
};

export default OAuthCallbackPage;
