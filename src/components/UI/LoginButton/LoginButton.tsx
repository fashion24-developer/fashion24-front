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

  //나중에 util로 뺄 예정(다른 곳 에서 사용된다면)
  const RouteHandler = (url: string) => {
    router.push(url);
  };

  return (
    <div className={style.loginButtonContainer}>
      <Image
        onClick={() => RouteHandler(props.redirect)}
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
