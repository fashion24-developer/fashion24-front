'use client';

import Image from 'next/image';
import * as style from '@/components/Layouts/Login/login.css';
import Link from 'next/link';
import ProviderSelect from '@/components/Layouts/Login/ProviderSelect';
import { motion } from 'framer-motion';
import useResizeY from '@/hooks/uesResizeY';

const Login = () => {
  const { yValue } = useResizeY();
  return (
    <motion.div className={style.loginContainer} animate={{ y: yValue }}>
      <Link href="/">
        <Image
          src="/images/intro_logo.png"
          fill
          alt="인트로 타이틀"
          style={{ objectFit: 'contain' }}
        ></Image>
      </Link>
      <ProviderSelect />
    </motion.div>
  );
};

export default Login;
