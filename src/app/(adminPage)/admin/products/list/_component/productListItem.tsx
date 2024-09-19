'use client';

import { useRouter } from 'next/navigation';
import * as styles from './productListItem.css';
import { name } from '@/app/(withoutBanner)/cart/@modal/(.)options/optionModal.css';

export default function ProductListItem() {
  const router = useRouter();

  const dummy = {
    id: 1,
    name: '엄청난 고양이',
    price: 10000,
    stock: 20,
    status: '판매중',
    date: '2024-09-13 : 13:00',
  };

  return (
    <ul className={styles.itemContainer}>
      <li className={styles.contentItem}>{dummy.id}</li>
      <li className={styles.contentItem}>{dummy.name}</li>
      <li className={styles.contentItem}>{dummy.price}</li>
      <li className={styles.contentItem}>{dummy.stock}</li>
      <li className={styles.contentItem}>{dummy.status}</li>
      <li className={styles.contentItem}>{dummy.date}</li>
      <li>
        <button
          onClick={() => router.push(`/admin/products/option/${dummy.id}`)}
          className={styles.contentButton}
        >
          수정/삭제
        </button>
      </li>
      <li className={styles.changeEventList}>
        <button
          onClick={() =>
            router.push(`/admin/products/list/look?fancyId=${dummy.id}`)
          }
          className={styles.contentButton}
        >
          look변경
        </button>
        <li>현재 룩</li>
      </li>
      <li className={styles.changeEventList}>
        <button
          onClick={() =>
            router.push(`/admin/products/list/changeOption?fancyId=${dummy.id}`)
          }
          className={styles.contentButton}
        >
          옵션변경
        </button>
        <li>현재 옵션1</li>
        <li>현재 옵션2</li>
        <li>현재 옵션3</li>
      </li>
    </ul>
  );
}
