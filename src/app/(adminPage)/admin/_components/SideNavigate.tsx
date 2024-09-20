'use client';

import Link from 'next/link';
import * as styles from './sideNavigate.css';
import { useSelectedLayoutSegment } from 'next/navigation';
import { assignInlineVars } from '@vanilla-extract/dynamic';

export type SideNavigateProps = {
  list: {
    id: string;
    name: string;
    path: string;
  }[];
};

export default function AdminSideNavigate({ list }: SideNavigateProps) {
  const segment = useSelectedLayoutSegment();
  return (
    <div className={styles.container}>
      <ul className={styles.listContainer}>
        {list.map(item => {
          return (
            <Link href={item.path} key={item.id}>
              <li
                style={assignInlineVars({
                  [styles.pickListVar]:
                    item.path.split('/')[item.path.split('/').length - 1] ===
                    segment
                      ? '#ff0000'
                      : '#000000',
                })}
                className={styles.list}
              >
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
