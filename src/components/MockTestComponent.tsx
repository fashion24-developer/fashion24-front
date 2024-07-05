'use client';

import MOCK from '@/apis/mock';
import { countAtom } from '@/jotai/atoms/testAtom';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

const MockTestComponent = () => {
  const testFunction = async () => {
    const res = await MOCK.testApi().then(res => {
      console.log(res);
    });
  };
  const [getTestCount, setTestCount] = useAtom(countAtom);

  const testCountHandler = (params: string) => {
    params === '+'
      ? setTestCount(getTestCount + 1)
      : setTestCount(getTestCount - 1);
  };

  useEffect(() => {
    testFunction();
  }, []);

  return (
    <div>
      <div onClick={() => testCountHandler('+')}>+</div>
      <div>{getTestCount}</div>
      <div onClick={() => testCountHandler('-')}>-</div>
      <div>모킹 데이터 테스트</div>
    </div>
  );
};

export default MockTestComponent;
