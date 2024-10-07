'use client';

import Image from 'next/image';
import * as style from './intro.css';
import IntroLinkImage from './IntroLinkImage';
import logoIcon from '/public/images/intro_logo.svg';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <div className={style.introContainer}>
      <motion.header
        className={style.titleWrapper}
        animate={{ scale: 0.5, y: -130 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <Image
          width={786}
          height={150}
          src="/images/intro_logo.webp"
          alt="intro_logo"
        />
      </motion.header>
      <motion.figure
        className={style.linkImageWrapper}
        animate={{ scale: 2.3, y: -150 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <IntroLinkImage
          href="/whatever"
          src="/images/intro_whatever.svg"
          figcaption="Making Jewelry"
          width={400}
          height={85}
        />
      </motion.figure>
      <motion.figure
        className={style.linkImageWrapper}
        animate={{ scale: 2.3, y: -50 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <IntroLinkImage
          href="/fancy"
          src="/images/intro_fancy.svg"
          figcaption="Fashion Jewelry"
          width={200}
          height={75}
        />
      </motion.figure>
    </div>
  );
}
