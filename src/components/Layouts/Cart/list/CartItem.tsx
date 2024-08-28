'use client';

import Image from 'next/image';
import * as style from '../cart.css';
import { useEffect, useState } from 'react';
import { CartItemPropType, selectItemType } from '@/types/cart';

const CartItem = (props: CartItemPropType) => {
  const [individualState, setIndividualState] = useState(false);

  useEffect(() => {
    setIndividualState(props.state);
  }, [props.state]);

  useEffect(() => {
    props.selectItem((prev: never[]) => {
      const temp: selectItemType = {
        cartId: props.id,
        price: props.price,
        count: props.count,
      };
      if (individualState) {
        return [...prev, temp];
      } else {
        return prev.filter((item: selectItemType) => item.cartId !== props.id);
      }
    });
  }, [individualState]);

  const individualStateHandler = () => {
    setIndividualState(!individualState);
  };

  return (
    <div className={style.cartItemContainer}>
      <input
        type="checkbox"
        checked={individualState}
        onChange={individualStateHandler}
      ></input>
      <Image
        src={props.images[0].url}
        alt={`${props.name}이미지`}
        width={100}
        height={100}
      />
      <div>
        <div>
          <div>{props.name}</div>
          <div>_</div>
          <div>{props.category}</div>
        </div>
        <div>수량: {props.count}개</div>
        {props.options.map((option, idx) => {
          return (
            <div key={idx}>
              <div>{option.name}</div>
              {option.subOptions[0].name}
            </div>
          );
        })}
        <div>{props.price}</div>
      </div>
    </div>
  );
};

export default CartItem;
