import Image from 'next/image';
import * as style from './login.css';
import Link from 'next/link';

interface LoginButtonProps {
  image: string;
  redirect: string;
  provider: string;
}

const LoginButton = (props: LoginButtonProps) => {
  return (
    <Link href={props.redirect} className={style.loginBUttonContainer}>
      <div className={style.responsiveImageWrapper}>
        <Image
          src={props.image}
          alt={`${props.provider}로그인버튼`}
          fill
          style={{ objectFit: 'contain' }}
        ></Image>
      </div>
    </Link>
  );
};

export default LoginButton;
