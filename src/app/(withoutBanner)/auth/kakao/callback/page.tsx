import OAuthCallbackPage from '@/app/(withoutBanner)/login/_components/Login/OauthCallback';
import { ClientOnly } from '@/app/_components/common/ClientOnly';

const NaverPage = () => {
  return (
    <ClientOnly>
      <OAuthCallbackPage provider="naver" />
    </ClientOnly>
  );
};

export default NaverPage;
