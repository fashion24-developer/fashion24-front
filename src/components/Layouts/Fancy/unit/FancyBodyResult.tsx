'use client';

import { FancyUnitBodyType } from '@/types/fancy';
import * as style from '../fancy.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useEffect, useState } from 'react';
import CountBox from '@/components/UI/CountBox/CountBox';
import CART from '@/apis/cart';

const FancyBodyResult = (props: FancyUnitBodyType) => {
  const [count, setCount] = useState(1);

  const cartHandler = async () => {
    const response = await CART.cartInApi();
  };

  return (
    <div className={style.resultContainer}>
      <div className={style.priceBoxContainer}>
        <CountBox count={count} setCount={setCount} />
        <div className={style.priceBox}>￦{count * props.price}</div>
      </div>
      <div className={style.submitButtonBoxContainer}>
        <div className={style.submitButtonBox}>
          It's my taste on hold for now
        </div>
        <div
          className={style.submitButtonBox}
          style={assignInlineVars({ [style.buttonColorVar]: '#ff0000' })}
        >
          Like it so much i want to buy it now
        </div>
      </div>
    </div>
  );
};

export default FancyBodyResult;
