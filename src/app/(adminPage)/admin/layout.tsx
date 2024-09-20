import Link from 'next/link';
import * as styles from './admin.css';
import Image from 'next/image';
import adminLogosvg from '/public/images/adminLogosvg.svg';

const nav = [
  { id: 'adminListId1', name: '상품', path: '/admin/products/list' },
  { id: 'adminListId2', name: '주문', path: '/admin/orders/list' },
  { id: 'adminListId3', name: '옵션', path: '/admin/options/list' },
  { id: 'adminListId5', name: '회원', path: '/admin/users/list' },
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className={styles.navHeader}>
        <Image src={adminLogosvg} width={280} height={50} alt="admin-logo" />
        <ul className={styles.listContainer}>
          {nav.map(item => {
            return (
              <Link href={item.path} key={item.id}>
                <li>{item.name}</li>
              </Link>
            );
          })}
        </ul>
        <div className={styles.headerRight}>
          <Link className={styles.backMainLink} href={'/'}>
            fashion24로 돌아가기
          </Link>
          <span className={styles.profile}></span>
        </div>
      </div>
      {children}
    </main>
  );
}
