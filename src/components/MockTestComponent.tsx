'use client';

import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';

const MockTestComponent = () => {
  const testFunction = async () => {
    const res = await axios.get('/api/ex').then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    testFunction();
    console.log('hello world');
  }, []);

  return (
    <div>
      <TestStyled />
      <div>모킹 데이터 테스트</div>
    </div>
  );
};

const TestStyled = styled.div`
  width: 100px;
  height: 100px;
  color: #f00;
`;

export default MockTestComponent;
