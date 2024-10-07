'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import Image from 'next/image';
import * as style from './introLinkImage.css';
import Link from 'next/link';
import { useState } from 'react';

interface IntroLinkImageProps {
  href: string;
  src: string;
  figcaption: string;
  width: number;
  height: number;
}

/**
 * intro 페이지의 이미지 링크 컴포넌트
 * @param props href : string Link 태그의 href 속성
 * @param props src : string Image 태그의 src 속성
 * @param props figcaption : hover시 보일 텍스트
 * @param props width : number Image 태그의 width 속성
 * @param props height : number Image 태그의 height 속성
 */
export default function IntroLinkImage({
  href,
  src,
  figcaption,
  width,
  height,
}: IntroLinkImageProps) {
  const [showHover, setShowHover] = useState(false);

  return (
    <Link href={href} className={style.linkImageWrapper}>
      <Image
        style={assignInlineVars({
          [style.imageOpacityVar]: showHover ? '0.3' : '1',
        })}
        className={style.linkImageBtn}
        onMouseOver={() => setShowHover(true)}
        onMouseOut={() => setShowHover(false)}
        width={width}
        height={height}
        src={src}
        alt={`image_${src}`}
      />
      <figcaption
        className={style.linkImageHover}
        style={assignInlineVars({
          [style.imageOpacityVar]: showHover ? '1' : '0',
          [style.imageVisibilityVar]: showHover ? 'visible' : 'hidden',
        })}
        onMouseOver={() => setShowHover(true)}
        onMouseOut={() => setShowHover(false)}
      >
        {figcaption}
      </figcaption>
    </Link>
  );
}
