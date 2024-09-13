import * as styles from './productListItem.css';

export default function ProductListItem() {
  return (
    <div className={styles.itemContainer}>
      <div>1</div>
      <div>엄청난 고양이</div>
      <div>{10000}</div>
      <div>{20}</div>
      <div>판매중</div>
      <div>2024-09-13 : 13:00</div>
      <div>수정/삭제</div>
    </div>
  );
}
