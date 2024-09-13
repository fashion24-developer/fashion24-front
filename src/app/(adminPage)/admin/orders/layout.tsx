import AdminSideNavigate from '../_components/SideNavigate';
import * as styles from '../admin.css';

const ordersSideNavList = [
  { id: 'order1', name: '주문 목록', path: '/admin/orders/list' },
  { id: 'order2', name: '배송 관리', path: '/admin/orders/delivery' },
  { id: 'order3', name: '입금 관리', path: '/admin/orders/payment' },
];

export default function AdminOrders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.sideContainer}>
      <AdminSideNavigate list={ordersSideNavList} />
      <main className={styles.contentContainer}>{children}</main>
    </div>
  );
}
