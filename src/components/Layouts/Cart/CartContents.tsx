'use client';

import CART from '@/apis/cart';
import { useEffect, useState } from 'react';
import * as style from './cart.css';
import CartItem from './list/CartItem';
import { CartItemListType, selectItemType } from '@/types/cart';

const CartContents = () => {
  const [getCartItem, setCartItem] = useState<CartItemListType[]>();
  const [selectItem, setSelectItem] = useState<selectItemType[]>([]);
  const [cartState, setCartState] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const cartListApi = async () => {
    const cartList = await CART.cartListApi();
    setCartItem(cartList);
  };

  const cartStateHandler = () => {
    setCartState(!cartState);
  };

  useEffect(() => {
    setTotalPrice(
      selectItem.reduce((acc, cur) => acc + cur.price * cur.count, 0)
    );
  }, [selectItem]);

  useEffect(() => {
    cartListApi();
  }, []);

  return (
    <>
      <div className={style.cartHeaderTitle}>장바구니</div>
      <div className={style.cartContentHeader}>
        <input
          type="checkbox"
          checked={cartState}
          onChange={cartStateHandler}
        ></input>
        <div>전체{getCartItem?.length}개</div>
        <div className={style.cartCheckRemoveText}>선택 삭제</div>
      </div>
      <div className={style.cartItemListContainer}>
        {getCartItem?.map(data => {
          const temp = {
            ...data,
            state: cartState,
            selectItem: setSelectItem,
          };
          return <CartItem {...temp} />;
        })}
      </div>
      <div>결제할 상품 총 {selectItem.length}개</div>
      <div>{totalPrice}</div>
    </>
  );
};

export default CartContents;
