import Image from 'next/image';
import * as style from '@/components/Layouts/Login/login.css';
import getPresetProviderAuth from '@/components/UI/LoginButton/utils/getProviderAuth';
import Link from 'next/link';

const Login = () => {
  return (
    <div className={style.loginContainer}>
      <Link href="/">
        <Image
          src="/images/intro_logo.png"
          fill
          alt="인트로 타이틀"
          style={{ objectFit: 'contain' }}
        ></Image>
      </Link>
      <div className={style.loginButtonContainer}>
        {getPresetProviderAuth('kakao')}
        {getPresetProviderAuth('naver')}
        {getPresetProviderAuth('google')}
      </div>
    </div>
  );
};

export default Login;
