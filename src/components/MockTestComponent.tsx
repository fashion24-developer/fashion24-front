'use client';

import axios from 'axios';
import { useEffect } from 'react';

const MockTestComponent = () => {
  const testFunction = async () => {
    const res = await axios.get('/api/ex').then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    testFunction();
  }, []);

  return (
    <div>
      <div>모킹 데이터 테스트</div>
    </div>
  );
};

export default MockTestComponent;
