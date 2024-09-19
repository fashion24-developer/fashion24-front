'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import * as styles from '../@modal/(.)options/optionModal.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import OptionComboBox from './OptionComboBox';
import { useEffect, useState } from 'react';
import FANCY from '@/apis/fancy';
import { FancyUnitType } from '@/types/fancy';

export default function OptionModal() {
  const router = useRouter();
  const params = useSearchParams();
  const item = JSON.parse(params.get('item') as string);

  const [getFancyData, setFancyData] = useState<FancyUnitType>();
  const [pickColor, setPickColor] = useState('');

  //fancy아이디에 따른 값 불러오는 api(cache기능 구현해서 성능향상)
  const getFancyUnitApi = async () => {
    const response = await FANCY.fancyUnitItemApi(item.fancyId);
    setFancyData(response);
  };

  useEffect(() => {
    getFancyUnitApi();
  }, [router]);

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
          {getFancyData?.options.map(option => {
            if (option.name === 'color') {
              return (
                <>
                  {option.subOptions.map(sub => {
                    return (
                      <div
                        style={assignInlineVars({
                          [styles.colorVar]: `${sub.name}`,
                        })}
                        className={styles.color}
                      ></div>
                    );
                  })}
                </>
              );
            }
          })}
        </div>
        <div className={styles.comboBoxWrapper}>
          {getFancyData?.options.map(option => {
            return <OptionComboBox select={item.options} option={option} />;
          })}
        </div>
      </div>
    </>
  );
}
