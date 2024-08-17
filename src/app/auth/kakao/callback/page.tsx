import React from 'react';
import OAuthCallbackPage from '@/components/Layouts/Login/OauthCallback';

const KaKaoPage = () => {
  return (
    <div>
      <OAuthCallbackPage provider="naver" />
    </div>
  );
};

export default KaKaoPage;
