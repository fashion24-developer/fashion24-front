'use client';

import { useEffect, useState } from 'react';

const useResizeY = () => {
  const [yValue, setYValue] = useState(0);

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

  return { yValue };
};

export default useResizeY;
