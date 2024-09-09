'use client';

import * as styles from '../@modal/(.)options/optionModal.css';

export default function OptionComboBox() {
  return (
    <div className={styles.comboBoxContainer}>
      <button className={styles.comboBoxButton}>Option1</button>
      <ul className={styles.comboBoxList}>
        <li className={styles.comboBoxItem}>SubOption1 1</li>
        <li className={styles.comboBoxItem}>SubOption1 2</li>
        <li className={styles.comboBoxItem}>SubOption1 3</li>
      </ul>
    </div>
  );
}
