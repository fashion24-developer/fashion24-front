'use client';

import { useState } from 'react';
import * as styles from './checkBox.css';

export default function CheckBox() {
  const [check, setCheck] = useState(false);

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
