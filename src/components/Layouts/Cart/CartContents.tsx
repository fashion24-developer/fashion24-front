'use client';

import CART from '@/apis/cart';
import { useEffect, useState } from 'react';
import * as style from './cart.css';
import { CartItemListType } from '@/types/cart';
import CartItem from './list/CartItem';

const CartContents = () => {
  const [getCartItem, setCartItem] = useState<CartItemListType[]>();

  const cartListApi = async () => {
    const cartList = await CART.cartListApi();
    setCartItem(cartList);
  };

  useEffect(() => {
    cartListApi();
  }, []);

  return (
    <>
      <div className={style.cartHeaderTitle}>장바구니</div>
      <div className={style.cartContentHeader}>
        <input type="checkbox"></input>
        <div>전체{getCartItem?.length}개</div>
        <div className={style.cartCheckRemoveText}>선택 삭제</div>
      </div>
      <div className={style.cartItemListContainer}>
        {getCartItem?.map(data => {
          return <CartItem {...data} />;
        })}
      </div>
    </>
  );
};

export default CartContents;
