import React from 'react';
import OAuthCallbackPage from '@/components/Layouts/Login/OauthCallback';

const GooglePage = () => {
  return (
    <div>
      <OAuthCallbackPage provider="naver" />
    </div>
  );
};

export default GooglePage;
