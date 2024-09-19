'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './modalWrapper.css';
import { useRouter } from 'next/navigation';

//모달 감싸는 컴포넌트
export default function ModalWrapper({
  children,
  width,
}: {
  children: React.ReactNode;
  width?: string;
}) {
  const router = useRouter();
  const onClickCloseHandler = () => {
    router.back();
  };
  return (
    <>
      <div className={styles.background} onClick={onClickCloseHandler}></div>
      <div
        className={styles.modalWrapper}
        style={assignInlineVars({ [styles.modalWrapperWidthVar]: width })}
      >
        {children}
      </div>
    </>
  );
}
