'use client';

import NavigateBarContent from './NavigateContents';
import * as styles from './navigate.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';

/**네이게이션 배열 데이터
 * login시 정보를 바꾸는 로직을구현 예정
 */
const navList = [
  { id: 'login_list1', name: '로그인', href: '/login' },
  { id: 'fancy_list2', name: 'fancy', href: '/fancy' },
  { id: 'whatever_list2', name: 'whatever', href: '/whatever' },
  { id: 'cart_list2', name: '장바구니', href: '/cart' },
];

export default function NavigateBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [xPosition, setXPosition] = useState(280);

  const closeSide = () => {
    setIsOpen(false);
    setXPosition(280);
  };

  useEffect(() => {
    if (isOpen) {
      setXPosition(0);
    } else {
      setXPosition(280);
    }
  }, [isOpen, xPosition]);

  const navPropsObj = {
    xPosition: xPosition,
    closeSide: closeSide,
  };

  //스크롤 감지 기능 나중에 추가

  return (
    <>
      {!isOpen ? (
        <div className={styles.button} onClick={() => setIsOpen(true)}>
          <span className={styles.hamburger} />
          <span className={styles.hamburger} />
          <span className={styles.hamburger} />
        </div>
      ) : (
        <div onClick={closeSide} className={styles.background}></div>
      )}
      <NavigateBarContent {...navPropsObj}>
        <div>
          <ul>
            {navList.map(nav => {
              return (
                <li key={nav.id}>
                  <Link
                    onClick={() => setIsOpen(false)}
                    className={styles.navList}
                    href={nav.href}
                  >
                    {nav.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </NavigateBarContent>
    </>
  );
}
