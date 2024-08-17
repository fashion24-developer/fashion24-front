import React from 'react';
import OAuthCallbackPage from '@/components/Layouts/Login/OauthCallback';

const NaverPage = () => {
  return (
    <div>
      <OAuthCallbackPage provider="naver" />
    </div>
  );
};

export default NaverPage;
