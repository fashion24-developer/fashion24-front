import path from 'path';
import AdminSideNavigate from '../_components/SideNavigate';
import * as styles from '../admin.css';

const optionsSideNAvList = [
  { id: 'option1', name: '옵션 등록', path: '/admin/options/list' },
  { id: 'option2', name: '소옵션 등록', path: '/admin/options/sub' },
];

export default function AdminOptions({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.sideContainer}>
      <AdminSideNavigate list={optionsSideNAvList} />
      <main className={styles.contentContainer}>{children}</main>
    </div>
  );
}
