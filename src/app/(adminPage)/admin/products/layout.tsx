import * as styles from '../admin.css';
import AdminSideNavigate from '../_components/SideNavigate';

const productSideNavList = [
  { id: 'productNav1', name: '상품 리스트', path: '/admin/products/list' },
  { id: 'productNav3', name: '재고 관리', path: '/admin/products/stock' },
  { id: 'productNav4', name: 'look 관리', path: '/admin/products/look' },
];

export default function AdminProducts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.sideContainer}>
      <AdminSideNavigate list={productSideNavList} />
      <main className={styles.contentContainer}>{children}</main>
    </div>
  );
}
