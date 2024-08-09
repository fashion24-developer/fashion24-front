'use client';

import Image from 'next/image';
import * as style from './intro.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { assignInlineVars } from '@vanilla-extract/dynamic';

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
    <div className={style.introContainer}>
      <motion.div
        className={style.introTitle}
        animate={{ scale: 0.3, y: yValue }}
        transition={{ delay: 2, duration: 1 }}
      >
        <Image
          className={style.imageComponent}
          src="/images/intro_logo.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="인트로 타이틀"
        ></Image>
      </motion.div>
      <motion.div
        className={style.introList}
        animate={{ scale: 1.2, y: yValue - 20 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <Link href="/whatever">
          <Image
            style={assignInlineVars({
              [style.imageOpacity]: showUnit1 ? '0.3' : '1',
            })}
            className={style.imageComponent}
            onMouseOver={() => setShowUnit1(true)}
            onMouseOut={() => setShowUnit1(false)}
            src="/images/intro_whatever.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="인트로 타이틀"
          ></Image>
          <div
            className={style.hoverImageComponent}
            style={assignInlineVars({
              [style.imageOpacity]: showUnit1 ? '1' : '0',
              [style.imageVisibility]: showUnit1 ? 'visible' : 'hidden',
            })}
            onMouseOver={() => setShowUnit1(true)}
            onMouseOut={() => setShowUnit1(false)}
          >
            Making jewelry
          </div>
        </Link>
      </motion.div>
      <motion.div
        className={style.introList}
        animate={{ scale: 1, y: yValue }}
        transition={{ delay: 2, duration: 1 }}
      >
        <Link href="/fancy">
          <Image
            style={assignInlineVars({
              [style.imageOpacity]: showUnit2 ? '0.3' : '1',
            })}
            className={style.imageComponent}
            onMouseOver={() => setShowUnit2(true)}
            onMouseOut={() => setShowUnit2(false)}
            src="/images/intro_fancy.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="인트로 타이틀"
          ></Image>
          <div
            className={style.hoverImageComponent}
            style={assignInlineVars({
              [style.imageOpacity]: showUnit2 ? '1' : '0',
              [style.imageVisibility]: showUnit2 ? 'visible' : 'hidden',
            })}
            onMouseOver={() => setShowUnit2(true)}
            onMouseOut={() => setShowUnit2(false)}
          >
            Show jewelry
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Intro;
