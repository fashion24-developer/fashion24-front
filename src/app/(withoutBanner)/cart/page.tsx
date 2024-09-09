'use client';

import CheckBox from '@/components/CheckBox/CheckBox';
import CartItem from './_components/CartItem';
import * as styles from './cart.css';
import { useEffect, useState } from 'react';
import { CartItemType } from '@/types/cart';
import CART from '@/apis/cart';
import PaymentStatus from './_components/PaymentStatus';
import CartListItem from './_components/CartListItem';
import CartListAllDelete from './_components/CartListAllDelete';

export default function ShoppingPage() {
  const [getCartList, setCartList] = useState<CartItemType[]>([]);

  const getCartListApi = async () => {
    const response = await CART.cartListApi();
    setCartList(response);
  };

  //나중에 server component로 변경
  useEffect(() => {
    getCartListApi();
  }, []);

  return (
    <>
      <div className={styles.pageTitle}>장바구니</div>
      <div className={styles.selectBar}>
        <div className={styles.checkBox}>
          <CheckBox all={true} />
          <div className={styles.checkBoxInput}>
            전체 {getCartList.length}개
          </div>
        </div>
        <CartListAllDelete />
      </div>
      <div className={styles.cartListContainer}>
        <CartListItem cartList={getCartList} />
      </div>
      <PaymentStatus />
    </>
  );
}
