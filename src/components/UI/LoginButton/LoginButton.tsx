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
    <div className={style.loginButtonContainer}>
      <Link href={props.redirect}>
        <Image
          src={props.image}
          alt={`${props.provider}로그인버튼`}
          fill
          style={{ objectFit: 'contain' }}
        ></Image>
      </Link>
    </div>
  );
};

export default LoginButton;
