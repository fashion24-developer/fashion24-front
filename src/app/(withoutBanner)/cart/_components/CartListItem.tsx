'use client';

import { CartItemType } from '@/types/cart';
import CartItem from './CartItem';
import CART from '@/apis/cart';
import { use, useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { cartListAllState } from '@/jotai/atoms/cartAtom';

export default function CartListItem({
  cartList,
}: {
  cartList: CartItemType[];
}) {
  const [deleteState, setDeleteState] = useAtom(cartListAllState);
  const [filterCartList, setFilterCartList] = useState<CartItemType[]>([]);
  //아이템 삭제
  const deleteItem = async (itemId: number) => {
    const response = await CART.deleteCartItemApi(itemId);
    setFilterCartList(response);
  };

  useEffect(() => {
    setFilterCartList(cartList);
  }, [cartList]);

  useEffect(() => {
    if (deleteState) {
      setFilterCartList([]);
      setDeleteState(false);
    }
  }, [deleteState]);

  return (
    <>
      {filterCartList.map((item, idx) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            index={idx}
            deleteHandler={deleteItem}
          />
        );
      })}
    </>
  );
}
