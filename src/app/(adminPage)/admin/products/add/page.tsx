'use client';

import { ChangeEventHandler, useState } from 'react';
import * as styles from './productsAdd.css';

export default function AdminProductsAdd() {
  const [status, setStatus] = useState('ACTIVE');
  const onSelectHandler: ChangeEventHandler<HTMLSelectElement> = e => {
    setStatus(e.target.value);
  };

  //커스텀 훅을 만들어서, form을 전송하는 로직을 구현
  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <div>상품명</div>
        <div>
          <input style={{ padding: 5 }} type="text" placeholder="상품명" />
        </div>
        <div>가격</div>
        <div>
          <input style={{ padding: 5 }} type="text" placeholder="가격" />
        </div>
        <div>할인율</div>
        <div>
          <input style={{ padding: 5 }} type="text" placeholder="할인율" />
        </div>
        <div>상품설명1</div>
        <textarea className={styles.description} placeholder="상품설명1" />
        <div>상품설명2</div>
        <textarea className={styles.description} placeholder="상품설명2" />
        <div>판매 상태</div>
        <div>
          <select value={status} onChange={onSelectHandler}>
            <option value="ACTIVE">판매중</option>
            <option value="INACTIVE">판매중지</option>
          </select>
        </div>
      </form>
      <div className={styles.submitButtonContainer}>
        <button className={styles.submitButton}>등록하기</button>
      </div>
    </div>
  );
}
