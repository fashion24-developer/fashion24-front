'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './navigate.css';
import { Dispatch, SetStateAction } from 'react';

interface NavigateBarContentProps {
  children: React.ReactNode;
  xPosition: number;
  closeSide: () => void;
}

export default function NavigateBarContent({
  children,
  closeSide,
  xPosition,
}: NavigateBarContentProps) {
  return (
    <div className={styles.container}>
      <div
        style={assignInlineVars({ [styles.xPositionVar]: `${xPosition}px` })}
        className={styles.navigate}
      >
        <div onClick={closeSide}>
          <span className={styles.closeButton}>X</span>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
