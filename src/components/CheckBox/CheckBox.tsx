'use client';

import { useState } from 'react';
import * as styles from './checkBox.css';
import { useAtom } from 'jotai';
import { checkBoxAtom } from '@/jotai/atoms/uiAtom';

export default function CheckBox() {
  const [check, setCheck] = useAtom(checkBoxAtom);

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
