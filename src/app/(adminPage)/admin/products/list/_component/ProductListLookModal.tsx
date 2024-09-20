'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import * as styles from './productListLookModal.css';
import ModalWrapper from '@/app/_components/modalWrapper/ModalWrapper';

export default function AdminProductListLookModal() {
  const query = useSearchParams();
  const fancyId = query.get('fancyId');
  const router = useRouter();
  //모든 룩을 불러오는 api 필요
  const getLookList = async () => {};

  const onClickCloseHandler = () => {
    router.back();
  };

  const combineFancyIdWithLookId = () => {
    //fancyID와 lookID를 합쳐서 api 요청
    router.back();
  };
  return (
    <>
      <ModalWrapper width="300px">
        <button className={styles.closeButton} onClick={onClickCloseHandler}>
          X
        </button>
        <ul className={styles.lookListWrapper}>
          <li className={styles.lookItem}>룩1</li>
          <li className={styles.lookItem}>룩2</li>
          <li className={styles.lookItem}>룩3</li>
        </ul>
        <div className={styles.submitButtonContainer}>
          <button
            className={styles.submitButton}
            onClick={combineFancyIdWithLookId}
          >
            확인
          </button>
        </div>
      </ModalWrapper>
    </>
  );
}
