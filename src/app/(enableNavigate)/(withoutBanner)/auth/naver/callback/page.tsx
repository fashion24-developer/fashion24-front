import { ClientOnly } from '@/app/_components/common/ClientOnly';
import OAuthCallbackPage from '../../_components/OauthCallback';

const NaverPage = () => {
  return (
    <ClientOnly>
      <OAuthCallbackPage provider="naver" />
    </ClientOnly>
  );
};

export default NaverPage;
