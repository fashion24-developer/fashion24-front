'use client';

import { useAtom } from 'jotai';
import * as styles from '../cart.css';
import { cartListAllState } from '@/jotai/atoms/cartAtom';

export default function CartListAllDelete() {
  const [deleteState, setDeleteState] = useAtom(cartListAllState);

  const deleteAllCart = async () => {
    //나중에 모달로 바꾸기
    if (confirm('정말로 삭제 하시겠습니까? ')) {
      //api
      setDeleteState(true);
    }
  };

  return (
    <>
      <div onClick={deleteAllCart} className={styles.unCheckedAll}>
        전체삭제
      </div>
    </>
  );
}
