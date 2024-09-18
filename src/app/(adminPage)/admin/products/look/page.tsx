import AdditionalLook from './_components/AdditionalLook';
import * as styles from './look.css';

export default function AdminProductLook() {
  return (
    <div className={styles.lookContainer}>
      <h2>Look카테고리</h2>
      <div className={styles.buttonWrapper}>
        <button>추가</button>
      </div>
      <ul className={styles.list}>
        <li>번호</li>
        <li>이미지</li>
        <li>이름</li>
      </ul>
      <ul className={styles.listContent}>
        <AdditionalLook />
        <AdditionalLook />
        <AdditionalLook />
      </ul>
    </div>
  );
}
