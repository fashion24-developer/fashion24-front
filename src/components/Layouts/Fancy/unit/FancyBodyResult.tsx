'use client';

import { FancyUnitBodyType } from '@/types/fancy';
import * as style from '../fancy.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useState } from 'react';
import CountBox from '@/components/UI/CountBox/CountBox';
import CART from '@/apis/cart';
import { usePathname, useSearchParams } from 'next/navigation';
import { cartAtom } from '@/jotai/atoms/cartAtom';
import { useAtomValue } from 'jotai';

const FancyBodyResult = (props: FancyUnitBodyType) => {
  const [count, setCount] = useState(1);
  const option = useAtomValue(cartAtom);
  const pathname = usePathname();
  const params = useSearchParams();

  const cartHandler = async () => {
    const fancyId = Number(pathname[pathname.length - 1]);
    const option = props.name;
    const response = await CART.cartInApi({
      fancyId: 23124,
      count: 3,
      options: {
        id: 12141,
        name: '선택한 옵션',
        selectSubOption: '선택한 소옵션',
      },
    });
  };

  return (
    <div className={style.resultContainer}>
      <div className={style.priceBoxContainer}>
        <CountBox count={count} setCount={setCount} />
        <div className={style.priceBox}>￦{count * props.price}</div>
      </div>
      <div className={style.submitButtonBoxContainer}>
        <div onClick={cartHandler} className={style.submitButtonBox}>
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
