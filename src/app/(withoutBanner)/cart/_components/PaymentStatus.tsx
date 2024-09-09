'use client';

import { useAtomValue } from 'jotai';
import * as styles from '../cart.css';
import { paymentPrice } from '@/jotai/atoms/cartAtom';

export default function PaymentStatus() {
  const totalPrice = useAtomValue(paymentPrice);

  return (
    <>
      <div className={styles.paymentTitle}>
        결제할 상품 총 {totalPrice.state.length}개
      </div>
      <div className={styles.paymentContainer}>
        <div className={styles.paymentPrice}>
          <div className={styles.paymentFontColor}>상품금액</div>
          <div>${totalPrice.price}</div>
        </div>
        <div className={styles.couponBox}>
          <div className={styles.paymentFontColor}>쿠폰적용</div>
          <div>콤보박스</div>
        </div>
      </div>
      <div className={styles.paymentSubmitContainer}>
        <div className={styles.paymentSubmit}>결제하기</div>
      </div>
    </>
  );
}
