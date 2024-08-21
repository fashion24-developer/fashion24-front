'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as style from '../fancy.css';
import { useState } from 'react';
import { OptionsType } from '@/types/fancy';

const FancyOptionsBox = (option: OptionsType) => {
  const [opacityItem, setOpacityItem] = useState('');

  const optionItemOpacityHandler = (item: React.MouseEvent<HTMLDivElement>) => {
    const target = item.target as HTMLElement;
    setOpacityItem(target.innerHTML);
  };

  //color 속성이 option에 있다면 표시하지 않음
  if (option.name === 'color') {
    return <></>;
  }
  return (
    <div style={{ display: 'flex' }}>
      <div className={style.optionItemTitle}>{option.name} : </div>
      {option.subOptions.map(sub => {
        return (
          <div
            className={style.optionItemBox}
            onClick={optionItemOpacityHandler}
            style={assignInlineVars({
              [style.opacityOptionVar]: opacityItem === sub.name ? '1' : '0.5',
            })}
          >
            {sub.name}
          </div>
        );
      })}
    </div>
  );
};

export default FancyOptionsBox;
