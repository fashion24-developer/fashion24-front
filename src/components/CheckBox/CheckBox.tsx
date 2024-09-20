'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import * as styles from './checkBox.css';
import { useAtom } from 'jotai';
import { checkBoxAtom } from '@/jotai/atoms/uiAtom';
import { CheckStateType } from '@/app/(enableNavigate)/(withoutBanner)/cart/_components/CartItem';

interface CheckBoxProps<T> {
  all: boolean;
  index?: number;
  setCheckState?: Dispatch<SetStateAction<T>>;
}

//나중에 index가 아니라 넘어오는 id값으로 변경 가능성 있음
export default function CheckBox<T extends CheckStateType>({
  all,
  index,
  setCheckState,
}: CheckBoxProps<T>) {
  const [allCheck, setAllCheck] = useAtom(checkBoxAtom);
  const [eachCheck, setEachCheck] = useState(false);

  useEffect(() => {
    setEachCheck(allCheck);
  }, [allCheck]);

  useEffect(() => {
    if (setCheckState) {
      setCheckState(prev => {
        return {
          ...prev,
          state: eachCheck,
        };
      });
    }
  }, [eachCheck]);

  if (all) {
    return (
      <div className={styles.checkBoxContainer}>
        <input
          onClick={() => setAllCheck(!allCheck)}
          type="checkbox"
          id="checkAll"
          checked={allCheck}
          className={styles.hiddenCheckbox}
        />
        <label htmlFor="checkAll" className={styles.checkboxLabel}></label>
      </div>
    );
  }

  return (
    <div className={styles.checkBoxContainer}>
      <input
        onClick={() => setEachCheck(!eachCheck)}
        type="checkbox"
        id={`check${index}`}
        checked={eachCheck}
        className={styles.hiddenCheckbox}
      />
      <label htmlFor={`check${index}`} className={styles.checkboxLabel}></label>
    </div>
  );
}
