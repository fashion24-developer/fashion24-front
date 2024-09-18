'use client';

import { useRouter } from 'next/navigation';
import * as styles from './productListItem.css';

export default function ProductListItem() {
  const router = useRouter();

  return (
    <ul className={styles.itemContainer}>
      <li className={styles.contentItem}>1</li>
      <li className={styles.contentItem}>엄청난 고양이</li>
      <li className={styles.contentItem}>{10000}</li>
      <li className={styles.contentItem}>{20}</li>
      <li className={styles.contentItem}>판매중</li>
      <li className={styles.contentItem}>2024-09-13 : 13:00</li>
      <li>
        <button
          onClick={() => router.replace(`/admin/products/option/${1}`)}
          className={styles.contentButton}
        >
          수정/삭제
        </button>
      </li>
      <li className={styles.changeEventList}>
        <button
          onClick={() => router.push(`/admin/products/list/look`)}
          className={styles.contentButton}
        >
          look변경
        </button>
        <li>현재 룩</li>
      </li>
      <li className={styles.changeEventList}>
        <button className={styles.contentButton}>옵션변경</button>
        <li>현재 옵션</li>
        <li>현재 옵션</li>
        <li>현재 옵션</li>
      </li>
    </ul>
  );
}
