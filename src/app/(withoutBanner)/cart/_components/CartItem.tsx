import CheckBox from '@/components/CheckBox/CheckBox';
import * as styles from '../cart.css';
import { CartItemType } from '@/types/cart';
import { useEffect, useState } from 'react';
import { useSetAtom } from 'jotai';
import { paymentPrice } from '@/jotai/atoms/cartAtom';

interface CarItemProps {
  item: CartItemType;
  index: number;
  deleteHandler: (itemId: number) => void;
}

export interface CheckStateType {
  id: number;
  state: false;
}

export default function CartItem({ item, index, deleteHandler }: CarItemProps) {
  const setTotalPrice = useSetAtom(paymentPrice);
  const [check, setCheck] = useState<CheckStateType>({
    id: item.id,
    state: false,
  });

  const calculationPrice = () => {
    setTotalPrice(prev => {
      const checkState = prev.state.find(state => state.id === check.id);
      if (!check.state) {
        return {
          state: checkState
            ? prev.state.filter((state: any) => state.id !== check.id)
            : prev.state,
          price: prev.price !== 0 ? prev.price - item.price : 0,
        };
      }
      return {
        state: [...prev.state, { id: check.id }],
        price: prev.price + item.price,
      };
    });
  };

  useEffect(() => {
    calculationPrice();
  }, [check]);

  return (
    <div className={styles.listItem}>
      <div className={styles.checkBoxContainer}>
        <CheckBox all={false} index={index} setCheckState={setCheck} />
      </div>
      <div className={styles.itemImage}>{item.image}</div>
      <div className={styles.itemContentContainer}>
        <div className={styles.itemHeaderContainer}>
          <div className={styles.itemTitle}>{item.name}</div>
          <div className={styles.itemSubTitle}>__</div>
          <div className={styles.itemSubTitle}>{item.category}</div>
        </div>
        <div className={styles.itemOptions}>
          {item.options?.map(option => {
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
          <div
            onClick={() => deleteHandler(item.id)}
            className={styles.closeButton}
          >
            X
          </div>
        </div>
        <div className={styles.itemPrice}>${item.price}</div>
      </div>
    </div>
  );
}
