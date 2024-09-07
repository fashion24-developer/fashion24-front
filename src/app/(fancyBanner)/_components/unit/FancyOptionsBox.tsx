'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as style from '../fancy.css';
import { useState } from 'react';
import { OptionsType } from '@/types/fancy';
import { useSelectOption } from '@/hooks/useSelectOption';

const FancyOptionsBox = (option: OptionsType) => {
  const [opacityItem, setOpacityItem] = useState('');
  const { selectedOptionHandler } = useSelectOption();

  const selectOptionHandler = (subOptionId: number, subOption: string) => {
    selectedOptionHandler({
      optionId: option.id,
      name: option.name,
      subOptionId: subOptionId,
      selectSubOption: subOption,
    });
    setOpacityItem(subOption);
  };

  //color 속성이 option에 있다면 표시하지 않음
  if (option.name === 'color') {
    return null;
  }
  return (
    <div style={{ display: 'flex' }}>
      <div className={style.optionItemTitle}>{option.name} : </div>
      {option.subOptions.map(sub => {
        return (
          <div
            onClick={() => {
              selectOptionHandler(sub.id, sub.name);
            }}
            className={style.optionItemBox}
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
