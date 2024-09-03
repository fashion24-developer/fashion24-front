'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as style from '../fancy.css';
import { useEffect, useState } from 'react';
import { OptionsType } from '@/types/fancy';
import { useAtom } from 'jotai';
import { cartAtom } from '@/jotai/atoms/cartAtom';

const FancyOptionsBox = (option: OptionsType) => {
  const [opacityItem, setOpacityItem] = useState('');
  const [selectOption, setSelectOption] = useAtom(cartAtom);

  const optionItemOpacityHandler = (item: React.MouseEvent<HTMLDivElement>) => {
    const target = item.target as HTMLElement;
    setOpacityItem(target.innerHTML);
  };

  const cartAtomHandler = (option: any) => {
    if (
      !selectOption.find(item => {
        item.name === option.name;
      })
    )
      setSelectOption(prev => [...prev, option]);
  };
  console.log(selectOption);

  const selectOptionHandler = (option: any) => {
    setSelectOption(prev => {
      const isExist = prev.some(item => item.id === option.id);
      if (!isExist) {
        return [...prev, option];
      }
      return prev;
    });
  };

  useEffect(() => {
    selectOption.map(item => {
      if (item.name === option.name) {
        setOpacityItem(item.selectSubOption);
      }
    });
  }, [selectOption]);

  //color 속성이 option에 있다면 표시하지 않음
  if (option.name === 'color') {
    return null;
  }
  return (
    <div style={{ display: 'flex' }}>
      <div className={style.optionItemTitle}>{option.name} : </div>
      {option.subOptions.map(sub => {
        const temp = {
          id: sub.id,
          name: option.name,
          selectSubOption: sub.name,
        };
        return (
          <div
            className={style.optionItemBox}
            onClick={() => {
              optionItemOpacityHandler;
              selectOptionHandler(temp);
            }}
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
