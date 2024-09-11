import Image from 'next/image';
import * as style from './banner.css';
import Link from 'next/link';

const Banner = ({
  backGround,
  description,
  src,
}: {
  backGround: string;
  description: string;
  src: string;
}) => {
  return (
    <div className={style.banner}>
      <Link href={src} className={style.bannerLink}>
        <Image
          className={style.bannerChild1}
          src={backGround}
          width={250}
          height={70}
          alt="background image"
        ></Image>
        <div className={style.bannerChild2}>{description}</div>
      </Link>
    </div>
  );
};

export default Banner;
