'use client';

import NavigateBarContent from './NavigateContents';
import * as styles from './navigate.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';

/**네이게이션 배열 데이터
 * login시 정보를 바꾸는 로직을구현 예정
 */
interface navListTye {
  id: string;
  name: string;
  href: string;
}

const navList: navListTye[] = [
  { id: 'login_list1', name: '로그인', href: '/login' },
  { id: 'fancy_list2', name: 'fancy', href: '/fancy' },
  { id: 'whatever_list3', name: 'whatever', href: '/whatever' },
  { id: 'cart_list4', name: '장바구니', href: '/cart' },
];

export default function NavigateBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [xPosition, setXPosition] = useState(280);
  const [whenLogin, setWhenLogin] = useState<navListTye[]>(navList);

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

  useEffect(() => {
    const afterLogin = navList.filter(nav => nav.id !== 'login_list1');
    const token = window.localStorage.getItem('accessToken');
    if (token) {
      setWhenLogin([
        { id: 'mypage_list6', name: '마이페이지', href: '/mypage' },
        ...afterLogin,
        { id: 'logout_list5', name: '로그아웃', href: '/logout' },
      ]);
    } else {
      setWhenLogin(navList);
    }
  }, [isOpen]);

  const navPropsObj = {
    xPosition: xPosition,
    closeSide: closeSide,
  };

  //스크롤 감지 기능 나중에 추가
  return (
    <>
      {!isOpen ? (
        <div className={styles.hamburgerContainer}>
          <div
            onClick={() => setIsOpen(true)}
            className={styles.hamburgerWrapper}
          >
            <span className={styles.hamburger} />
            <span className={styles.hamburger} />
            <span className={styles.hamburger} />
          </div>
        </div>
      ) : (
        <div onClick={closeSide} className={styles.background}></div>
      )}
      <NavigateBarContent {...navPropsObj}>
        <div>
          <ul>
            {whenLogin.map(nav => {
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
