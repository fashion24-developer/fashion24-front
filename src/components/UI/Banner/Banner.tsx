import Image from 'next/image';
import * as style from './banner.css';

const Banner = ({
  backGround,
  description,
}: {
  backGround: string;
  description: string;
}) => {
  return (
    <div className={style.banner}>
      <Image
        className={style.bannerChild1}
        src={backGround}
        width={250}
        height={70}
        alt="background image"
      ></Image>
      <div className={style.bannerChild2}>{description}</div>
    </div>
  );
};

export default Banner;
