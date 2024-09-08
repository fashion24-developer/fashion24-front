import CheckBox from '@/components/CheckBox/CheckBox';
import * as styles from '../cart.css';

export default function CartItem() {
  return (
    <div className={styles.listItem}>
      <div className={styles.checkBoxContainer}>
        <CheckBox />
      </div>
      <div className={styles.itemImage}>사진</div>
      <div className={styles.itemContentContainer}>
        <div className={styles.itemHeaderContainer}>
          <div className={styles.itemTitle}>상품명</div>
          <div className={styles.itemSubTitle}>__</div>
          <div className={styles.itemSubTitle}>상품 카테고리</div>
        </div>
        <div className={styles.itemOptions}>옵션 배열</div>
        <div className={styles.optionChangeButton}>옵션/수량 변경</div>
      </div>
      <div className={styles.contentEnd}>
        <div className={styles.itemClose}>
          <div className={styles.closeButton}>X</div>
        </div>
        <div className={styles.itemPrice}>${100000}</div>
      </div>
    </div>
  );
}
