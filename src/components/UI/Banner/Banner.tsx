import Image from 'next/image';
import * as S from './BannerStyled';

const Banner = ({
  backGround,
  description,
}: {
  backGround: string;
  description: string;
}) => {
  return (
    <S.Banner>
      <Image
        src={backGround}
        width={250}
        height={70}
        alt="background image"
      ></Image>
      <div>{description}</div>
    </S.Banner>
  );
};

export default Banner;
