import Image from 'next/image';
import * as style from './header.css';
import Link from 'next/link';
const Header = ({ src }: { src: string }) => {
  return (
    <div className={style.header}>
      <Link href={'/'}>
        <Image src={src} width={250} height={50} alt="Header Logo"></Image>
      </Link>
    </div>
  );
};

export default Header;
