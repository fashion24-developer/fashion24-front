'use client';

import { useCallback, useState } from 'react';

/**
 * @title EX로 만든 훅 입니다.
 * @returns getTest, testHookHandler
 * @use const {getTest, testHookHandler} = useTestHook(boolean));
 */
const uesTestHook = (props: boolean) => {
  const [getTest, setTest] = useState(props);

  const testHookHandler = useCallback(() => {
    setTest(!getTest);
  }, [getTest]);

  return {
    getTest,
    testHookHandler,
  };
};

export default uesTestHook;
