'use client';

import Image from 'next/image';
import * as S from './IntroStyled';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Intro = () => {
  const [yValue, setYValue] = useState(0);
  const [showUnit1, setShowUnit1] = useState(false);
  const [showUnit2, setShowUnit2] = useState(false);

  //화면 크기에 따라 위치 조정
  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 1000) {
        setYValue(-50); // 작은 화면에서는 덜 이동하도록 조정
      } else {
        setYValue(-100); // 큰 화면에서는 더 많이 이동하도록 조정
      }
    };

    window.addEventListener('resize', resizeHandler);
    resizeHandler(); // 초기 설정을 위해 호출

    //언마운트시 clean-up 함수
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  return (
    <S.IntroContainer>
      <S.IntroTitle
        animate={{ scale: 0.3, y: yValue }}
        transition={{ delay: 2, duration: 1 }}
      >
        <Image
          src="/images/intro_logo.png"
          width={1000}
          height={1000}
          alt="인트로 타이틀"
        ></Image>
      </S.IntroTitle>
      <S.IntroListUnit
        show={showUnit1}
        width="45%"
        height="45%"
        color="black"
        animate={{ scale: 1.3, y: yValue - 20 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <Link href="/whatever">
          <Image
            onMouseOver={() => setShowUnit1(true)}
            onMouseOut={() => setShowUnit1(false)}
            src="/images/intro_whatever.png"
            width={1000}
            height={1000}
            alt="인트로 타이틀"
          ></Image>
          <S.HoverGetShowTextBox
            show={showUnit1}
            onMouseOver={() => setShowUnit1(true)}
            onMouseOut={() => setShowUnit1(false)}
          >
            Making jewelry
          </S.HoverGetShowTextBox>
        </Link>
      </S.IntroListUnit>
      <S.IntroListUnit
        width="30%"
        height="30%"
        show={showUnit2}
        color="white"
        animate={{ scale: 1.3, y: yValue }}
        transition={{ delay: 2, duration: 1 }}
      >
        <Link href="/fancy">
          <Image
            onMouseOver={() => setShowUnit2(true)}
            onMouseOut={() => setShowUnit2(false)}
            src="/images/intro_fancy.png"
            width={1000}
            height={1000}
            alt="인트로 타이틀"
          ></Image>
          <S.HoverGetShowTextBox
            show={showUnit2}
            onMouseOver={() => setShowUnit2(true)}
            onMouseOut={() => setShowUnit2(false)}
          >
            Show jewelry
          </S.HoverGetShowTextBox>
        </Link>
      </S.IntroListUnit>
    </S.IntroContainer>
  );
};

export default Intro;
