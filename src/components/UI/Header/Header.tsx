import Image from 'next/image';
import * as style from './header.css';
const Header = ({ src }: { src: string }) => {
  return (
    <div className={style.header}>
      <Image src={src} width={250} height={50} alt="Header Logo"></Image>
    </div>
  );
};

export default Header;
