import CheckBox from '@/components/CheckBox/CheckBox';
import * as styles from '../cart.css';
import { CartItemType } from '@/types/cart';

export default function CartItem(props: CartItemType) {
  return (
    <div className={styles.listItem}>
      <div className={styles.checkBoxContainer}>
        <CheckBox all={false} />
      </div>
      <div className={styles.itemImage}>{props.image}</div>
      <div className={styles.itemContentContainer}>
        <div className={styles.itemHeaderContainer}>
          <div className={styles.itemTitle}>{props.name}</div>
          <div className={styles.itemSubTitle}>__</div>
          <div className={styles.itemSubTitle}>{props.category}</div>
        </div>
        <div className={styles.itemOptions}>
          {props.options?.map(option => {
            return (
              <div key={option.id}>
                {option.name} : {option.selectSubName}
              </div>
            );
          })}
        </div>
        <div className={styles.optionChangeButton}>옵션/수량 변경</div>
      </div>
      <div className={styles.contentEnd}>
        <div className={styles.itemClose}>
          <div className={styles.closeButton}>X</div>
        </div>
        <div className={styles.itemPrice}>${props.price}</div>
      </div>
    </div>
  );
}
