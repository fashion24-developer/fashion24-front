import Link from 'next/link';

export default function AdminProducts() {
  return (
    <div>
      <h2>상품관리</h2>
      <ul>
        <Link href={'/admin/products/list'}>상품 리스트</Link>
        <Link href={'/admin/products/add'}>상품 등록</Link>
        <Link href={'/admin/products/stock'}>재고 관리</Link>
        <Link href={'/admin/products/look'}>look 관리</Link>
      </ul>
    </div>
  );
}
