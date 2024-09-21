import Link from 'next/link';
import ProductListItem from './_component/productListItem';
import * as styles from './productList.css';

export default function AdminProductsList() {
  return (
    <>
      <h3 className={styles.listTitle}>상품 리스트</h3>
      <div className={styles.addButtonContainer}>
        <Link href={'/admin/products/list/add'} className={styles.addButton}>
          +상품등록
        </Link>
      </div>
      <div className={styles.contentContainer}>
        <ul className={styles.titleContainer}>
          <li className={styles.listItem}>ID</li>
          <li className={styles.listItem}>상품명</li>
          <li className={styles.listItem}>가격</li>
          <li className={styles.listItem}>상태</li>
          <li className={styles.listItem}>look</li>
          <li className={styles.listItem}>옵션</li>
          <li className={styles.listItem}>태그</li>
          <li className={styles.listItem}>등록일</li>
          <li className={styles.listItem}>수정/삭제</li>
        </ul>
        <ul className={styles.listContainer}>
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
        </ul>
      </div>
    </>
  );
}
