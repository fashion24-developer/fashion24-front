'use client';

import { useEffect, useState } from 'react';
import * as styles from '../@modal/(.)options/optionModal.css';
import { FancyUnitType } from '@/types/fancy';
import FANCY from '@/apis/fancy';

interface OptionComboBoxProps {
  select: {
    id: number;
    name: string;
    selectSubOption: number;
    subName: string;
  }[];
  option: {
    name: string;
    id: number;
    subOptions: {
      id: number;
      name: string;
      price: number;
    }[];
  };
}

export default function OptionComboBox({
  select,
  option,
}: OptionComboBoxProps) {
  const [dropdown, setDropdown] = useState(false);
  const [currentState, setCurrentState] = useState('');

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };

  const currentStateHandler = (subOption: string) => {
    setCurrentState(subOption);
    setDropdown(false);
  };

  if (option.name === 'color') {
    return null;
  }

  return (
    <div className={styles.comboBoxContainer}>
      <button onClick={dropdownHandler} className={styles.comboBoxButton}>
        {currentState ? currentState : option.name}
      </button>
      {dropdown && (
        <>
          <ul className={styles.comboBoxList}>
            {option.subOptions.map(sub => (
              <li
                key={sub.id}
                className={styles.comboBoxItem}
                onClick={() => currentStateHandler(sub.name)}
              >
                {sub.name}
              </li>
            ))}
          </ul>
          <div
            onClick={dropdownHandler}
            className={styles.backgroundDropdown}
          ></div>
        </>
      )}
    </div>
  );
}
