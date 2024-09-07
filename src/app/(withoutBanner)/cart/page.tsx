import CheckBox from '@/components/CheckBox/CheckBox';
import CartItem from './_components/CartItem';
import * as styles from './cart.css';

export default function ShoppingPage() {
  return (
    <>
      <div className={styles.pageTitle}>장바구니</div>
      <div className={styles.selectBar}>
        <div className={styles.checkBox}>
          <CheckBox />
          <div className={styles.checkBoxInput}>전체{0}개</div>
        </div>
        <div className={styles.unCheckedAll}>전체삭제</div>
      </div>
      <div className={styles.cartListContainer}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </>
  );
}
