'use client';

import { CartItemType } from '@/types/cart';
import CartItem from './CartItem';
import CART from '@/apis/cart';
import { use, useEffect, useState } from 'react';

export default function CartListItem({
  cartList,
}: {
  cartList: CartItemType[];
}) {
  const [filterCartList, setFilterCartList] = useState<CartItemType[]>([]);
  //아이템 삭제
  const deleteItem = async (itemId: number) => {
    const response = await CART.deleteCartItemApi(itemId);
    setFilterCartList(response);
  };

  useEffect(() => {
    setFilterCartList(cartList);
  }, [cartList]);

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
