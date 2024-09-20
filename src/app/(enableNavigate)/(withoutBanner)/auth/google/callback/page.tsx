import { ClientOnly } from '@/app/_components/common/ClientOnly';
import OAuthCallbackPage from '../../_components/OauthCallback';

const GooglePage = () => {
  return (
    <ClientOnly>
      <OAuthCallbackPage provider="naver" />
    </ClientOnly>
  );
};

export default GooglePage;
