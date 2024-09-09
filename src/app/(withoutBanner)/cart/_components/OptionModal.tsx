'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import * as styles from '../@modal/(.)options/optionModal.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import OptionComboBox from './OptionComboBox';

export default function OptionModal() {
  const router = useRouter();
  const params = useSearchParams();
  const item = JSON.parse(params.get('item') as string);
  console.log(item);

  //아마 api로 불러와야 할 듯 cache기능 구현해서 성능 up
  return (
    <>
      <div onClick={() => router.back()} className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <div className={styles.name}>{item.name}</div>
          <div>__</div>
          <div>{item.category}</div>
        </div>
        <div className={styles.colorWrapper}>
          <div
            style={assignInlineVars({ [styles.colorVar]: '#f00ff0' })}
            className={styles.color}
          ></div>
          <div
            style={assignInlineVars({ [styles.colorVar]: '#ffff00' })}
            className={styles.color}
          ></div>
          <div
            style={assignInlineVars({ [styles.colorVar]: '#ff0f00' })}
            className={styles.color}
          ></div>
        </div>
        <div className={styles.comboBoxWrapper}>
          <OptionComboBox />
        </div>
      </div>
    </>
  );
}
