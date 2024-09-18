import Link from 'next/link';
import * as styles from './admin.css';

const nav = [
  { id: 'adminListId1', name: '상품관리', path: '/admin/products/list' },
  { id: 'adminListId2', name: '주문관리', path: '/admin/orders/list' },
  { id: 'adminListId3', name: '옵션관리', path: '/admin/options/list' },
  { id: 'adminListId5', name: '회원관리', path: '/admin/users/list' },
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className={styles.headerContainer}>
        <h1>FASHION24 ADMIN</h1>
        <Link href={'/'}>fashion24로 돌아가기</Link>
      </div>
      <div>
        <ul className={styles.navigate}>
          {nav.map(item => {
            return (
              <Link href={item.path} key={item.id}>
                <li className={styles.navItem}>{item.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      {children}
    </main>
  );
}
