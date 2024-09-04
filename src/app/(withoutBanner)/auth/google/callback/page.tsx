import OAuthCallbackPage from '@/app/(withoutBanner)/login/_components/Login/OauthCallback';
import { ClientOnly } from '@/common/ClientOnly';

const GooglePage = () => {
  return (
    <ClientOnly>
      <OAuthCallbackPage provider="naver" />
    </ClientOnly>
  );
};

export default GooglePage;
