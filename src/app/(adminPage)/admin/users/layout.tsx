import AdminSideNavigate from '../_components/SideNavigate';
import * as styles from '../admin.css';

const userSideNavList = [
  { id: 'user1', name: '유저 리스트', path: '/admin/users/list' },
  { id: 'user2', name: '쿠폰 관리', path: '/admin/users/coupon' },
];

export default function AdminUsers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.sideContainer}>
      <AdminSideNavigate list={userSideNavList} />
      <main className={styles.contentContainer}>{children}</main>
    </div>
  );
}
