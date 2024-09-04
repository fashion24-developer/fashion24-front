'use client';

import Image from 'next/image';
import * as style from './login.css';
import { useRouter } from 'next/navigation';

interface LoginButtonProps {
  image: string;
  redirect: string;
  provider: string;
}

const LoginButton = (props: LoginButtonProps) => {
  const router = useRouter();

  return (
    <div className={style.loginButtonContainer}>
      <Image
        onClick={() => router.push(props.redirect)}
        className={style.imageStyleBox}
        src={props.image}
        alt={`${props.provider}로그인버튼`}
        width={0}
        height={0}
        sizes="100vw"
      ></Image>
    </div>
  );
};

export default LoginButton;
