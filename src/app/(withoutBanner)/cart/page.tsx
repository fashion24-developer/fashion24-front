'use client';

import CheckBox from '@/components/CheckBox/CheckBox';
import CartItem from './_components/CartItem';
import * as styles from './cart.css';
import { useEffect, useState } from 'react';
import { CartItemType } from '@/types/cart';
import CART from '@/apis/cart';
import PaymentStatus from './_components/PaymentStatus';

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
        <div className={styles.unCheckedAll}>전체삭제</div>
      </div>
      <div className={styles.cartListContainer}>
        {getCartList.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <PaymentStatus />
    </>
  );
}
