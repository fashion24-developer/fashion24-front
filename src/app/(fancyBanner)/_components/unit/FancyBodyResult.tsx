'use client';

import { FancyUnitBodyType } from '@/types/fancy';
import * as style from '../fancy.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useState } from 'react';
import CountBox from '@/components/CountBox/CountBox';
import CART from '@/apis/cart';
import { useRouter } from 'next/navigation';
import { useAtomValue } from 'jotai';
import { cartAtom } from '@/jotai/atoms/cartAtom';

const FancyBodyResult = (props: FancyUnitBodyType) => {
  const [count, setCount] = useState(1);
  const option = useAtomValue(cartAtom);
  const router = useRouter();

  const cartHandler = async () => {
    if (props.options.length === option.options.length) {
      const optionReq = option.options.map(item => {
        return {
          optionId: item.optionId,
          subOptionId: item.subOptionId,
        };
      });
      const response = await CART.cartInApi({
        fancyId: option.fancyId,
        count: count,
        options: optionReq,
      });
      if (response && confirm('장바구니에 담았습니다. 이동하시겠습니까?')) {
        router.replace('/cart');
      }
    } else {
      //alert은 나중에 모달로 모두 대체
      alert('옵셥을 선택해 주세요.');
    }
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
