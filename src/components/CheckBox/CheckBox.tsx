'use client';

import { useState } from 'react';
import * as styles from './checkBox.css';
import { useAtom } from 'jotai';
import { checkBoxAtom } from '@/jotai/atoms/uiAtom';

export default function CheckBox(all: { all: boolean }) {
  const [check, setCheck] = useAtom(checkBoxAtom);
  const [eachCheck, setEachCheck] = useState(false);

  //나중에 util로 분리
  if (all) {
    return (
      <div className={styles.checkBoxContainer}>
        <input
          onClick={() => setCheck(!check)}
          type="checkbox"
          id="check1"
          checked={check}
          className={styles.hiddenCheckbox}
        />
        <label htmlFor="check1" className={styles.checkboxLabel}></label>
      </div>
    );
  }

  return (
    <div className={styles.checkBoxContainer}>
      <input
        onClick={() => setEachCheck(!eachCheck)}
        type="checkbox"
        id="check1"
        checked={eachCheck}
        className={styles.hiddenCheckbox}
      />
      <label htmlFor="check1" className={styles.checkboxLabel}></label>
    </div>
  );
}
