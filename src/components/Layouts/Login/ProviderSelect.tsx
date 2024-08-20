'use client';

import getPresetProviderAuth from './utils/getProviderAuth';
import * as style from './login.css';
import { motion } from 'framer-motion';
import useResizeY from '@/hooks/uesResizeY';

const ProviderSelect = () => {
  const { yValue } = useResizeY();
  return (
    <motion.div className={style.loginButtonContainer} animate={{ y: yValue }}>
      {getPresetProviderAuth('kakao')}
      {getPresetProviderAuth('naver')}
      {getPresetProviderAuth('google')}
    </motion.div>
  );
};

export default ProviderSelect;
