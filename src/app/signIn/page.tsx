import Image from 'next/image';
import { getSignInProvider } from './_utils/getSignInProvider';
import * as style from './signIn.css';
import ButtonWithImage from '@/components/Button/ButtonWithImage';

export default function SignIn() {
  return (
    <div className={style.signInContainer}>
      <div className={style.logoWrapper}>
        <ButtonWithImage
          src="/images/intro_logo.webp"
          width={550}
          height={120}
          link="/"
          alt="로고"
        />
      </div>
      {getSignInProvider('kakao')}
      {getSignInProvider('naver')}
      {getSignInProvider('google')}
    </div>
  );
}
