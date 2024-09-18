import ProductListItem from './_component/productListItem';
import * as styles from './productList.css';

export default function AdminProductsList() {
  return (
    <>
      <ul className={styles.titleContainer}>
        <li className={styles.listItem}>번호</li>
        <li className={styles.listItem}>상품명</li>
        <li className={styles.listItem}>가격</li>
        <li className={styles.listItem}>재고</li>
        <li className={styles.listItem}>상태</li>
        <li className={styles.listItem}>등록일</li>
        <li className={styles.listItem}>수정/삭제</li>
        <li className={styles.listItem}>look관리</li>
        <li className={styles.listItem}>옵션관리</li>
      </ul>
      <ul className={styles.listContainer}>
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
      </ul>
    </>
  );
}
