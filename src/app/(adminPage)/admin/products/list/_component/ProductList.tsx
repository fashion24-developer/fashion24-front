'use client';

import ProductListItem from './ProductListItem';
import * as styles from './productList.css';
import Pagination from './Pagintaion';
import { useState } from 'react';

export default function ProductList() {
  const [page, setPage] = useState(1);
  const totalPage = 12;

  return (
    <>
      <ul className={styles.listContainer}>
        <ProductListItem num={`${page}-1`} />
        <ProductListItem num={`${page}-2`} />
        <ProductListItem num={`${page}-3`} />
        <ProductListItem num={`${page}-4`} />
        <ProductListItem num={`${page}-5`} />
      </ul>
      <div>
        <Pagination page={page} totalPage={totalPage} setPage={setPage} />
      </div>
    </>
  );
}
