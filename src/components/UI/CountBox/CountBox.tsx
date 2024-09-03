'use client';

import { Dispatch, SetStateAction } from 'react';
import * as style from './countBox.css';

const CountBox = ({
  count,
  setCount,
}: {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}) => {
  const countHandler = (type: 'plus' | 'minus') => {
    if (type === 'minus' && count > 1) {
      setCount(prev => prev - 1);
    }
    if (type === 'plus') {
      setCount(prev => prev + 1);
    }
    //나중에 재고량에 따라서 핸들링 추가
  };

  return (
    <div className={style.countBoxContainer}>
      <div className={style.plusMinus} onClick={() => countHandler('minus')}>
        <div className={style.minusButton}></div>
      </div>
      <div className={style.countBox}>{count}</div>
      <div onClick={() => countHandler('plus')} className={style.plusMinus}>
        <div className={style.plusButton}></div>
      </div>
    </div>
  );
};

export default CountBox;
