import ProductListItem from './_component/productListItem';
import * as styles from './productList.css';

export default function AdminProductsList() {
  return (
    <>
      <div className={styles.titleContainer}>
        <div>번호</div>
        <div>상품명</div>
        <div>가격</div>
        <div>재고</div>
        <div>상태</div>
        <div>등록일</div>
        <div>수정/삭제</div>
      </div>
      <div className={styles.listContainer}>
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
      </div>
    </>
  );
}
