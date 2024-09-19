'use client';
import { useRouter } from 'next/navigation';
import * as styles from './productListLookModal.css';
import ModalWrapper from '@/app/_components/modalWrapper/ModalWrapper';

export default function AdminProductListChangeOptionModal() {
  const router = useRouter();

  const combineFancyIdWithOptionId = () => {};

  const onClickCloseHandler = () => {
    router.back();
  };

  return (
    <ModalWrapper>
      <button className={styles.closeButton} onClick={onClickCloseHandler}>
        X
      </button>
      <ul className={styles.lookListWrapper}>
        <li className={styles.lookItem}>option1</li>
        <li className={styles.lookItem}>option2</li>
        <li className={styles.lookItem}>option3</li>
      </ul>
      <div className={styles.submitButtonContainer}>
        <button
          className={styles.submitButton}
          onClick={combineFancyIdWithOptionId}
        >
          확인
        </button>
      </div>
    </ModalWrapper>
  );
}
