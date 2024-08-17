import { ClientOnly } from '@/common/ClientOnly';
import OAuthCallbackPage from '@/components/Layouts/Login/OauthCallback';

const NaverPage = () => {
  return (
    <ClientOnly>
      <OAuthCallbackPage provider="naver" />
    </ClientOnly>
  );
};

export default NaverPage;
