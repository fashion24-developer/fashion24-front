import { ClientOnly } from '@/common/ClientOnly';
import OAuthCallbackPage from '@/components/Layouts/Login/OauthCallback';

const GooglePage = () => {
  return (
    <ClientOnly>
      <OAuthCallbackPage provider="naver" />
    </ClientOnly>
  );
};

export default GooglePage;
