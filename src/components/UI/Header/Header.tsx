import Image from 'next/image';
import * as S from './HeaderStyled';

const Header = ({ src }: { src: string }) => {
  return (
    <S.Header>
      <Image src={src} width={250} height={50} alt="Header Logo"></Image>
    </S.Header>
  );
};

export default Header;
