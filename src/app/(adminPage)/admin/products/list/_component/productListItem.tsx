'use client';

import { useRouter } from 'next/navigation';
import * as styles from './productListItem.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

export default function ProductListItem() {
  const router = useRouter();

  const dummy = {
    id: '90c7gRlwkLvmDQxbp5pzY',
    name: '엄청난 고양이',
    price: 10000,
    stock: 20,
    look: 'summer',
    options: ['option1', 'option2', 'option3'],
    tags: ['tag1', 'tag2', 'tag3'],
    status: '판매중',
    date: '2024-09-13 : 13:00',
  };

  return (
    <ul className={styles.itemContainer}>
      <li className={styles.contentItem}>{dummy.id}</li>
      <li className={styles.contentItem}>{dummy.name}</li>
      <li className={styles.contentItem}>{dummy.price}</li>
      <li className={styles.contentItem}>{dummy.status}</li>
      <li className={styles.contentItem}>{dummy.look}</li>
      <li className={styles.optionTagContainer}>
        {dummy.options.map(option => (
          <li className={styles.optionItem}>{option}</li>
        ))}
      </li>
      <li className={styles.optionTagContainer}>
        {dummy.tags.map(tag => (
          <li className={styles.tagItem}>#{tag}</li>
        ))}
      </li>
      <li className={styles.contentItem}>{dummy.date}</li>
      <li className={styles.contentItem}>
        <button
          onClick={() => router.push(`/admin/products/option/${dummy.id}`)}
          className={styles.contentButton}
          style={assignInlineVars({
            [styles.buttonBgVar]: 'rgba(5, 102, 221, 0.15)',
            [styles.buttonColorVar]: 'rgba(5, 102, 221, 1)',
          })}
        >
          수정
        </button>
        <button
          onClick={() => router.push(`/admin/products/option/${dummy.id}`)}
          className={styles.contentButton}
          style={assignInlineVars({
            [styles.buttonBgVar]: 'rgba(221, 5, 5, 0.15)',
            [styles.buttonColorVar]: 'rgba(221, 5, 5, 1)',
          })}
        >
          삭제
        </button>
      </li>
    </ul>
  );
}
