import Link from 'next/link';
import * as styles from './sideNavigate.css';

export type SideNavigateProps = {
  list: {
    id: string;
    name: string;
    path: string;
  }[];
};

export default function AdminSideNavigate({ list }: SideNavigateProps) {
  return (
    <div className={styles.container}>
      <ul>
        {list.map(item => {
          return (
            <Link href={item.path} key={item.id}>
              <li className={styles.list}>{item.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
