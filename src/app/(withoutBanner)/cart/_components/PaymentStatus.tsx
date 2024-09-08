import * as styles from '../cart.css';

export default function PaymentStatus() {
  return (
    <>
      <div className={styles.paymentTitle}>결제할 상품 총 {3}개</div>
      <div className={styles.paymentContainer}>
        <div className={styles.paymentPrice}>
          <div className={styles.paymentFontColor}>상품금액</div>
          <div>${20000}</div>
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
