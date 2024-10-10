import Image from 'next/image';
import Link from 'next/link';
import * as style from './buttonWithImage.css';

interface ButtonWithImageProps {
  src: string;
  link: string;
  width: number;
  height: number;
  alt: string;
}

export default function ButtonWithImage({
  src,
  width,
  height,
  alt,
  link,
}: ButtonWithImageProps) {
  return (
    <>
      <Link className={style.buttonLink} href={link}>
        <Image src={src} width={width} height={height} alt={alt} />
      </Link>
    </>
  );
}
