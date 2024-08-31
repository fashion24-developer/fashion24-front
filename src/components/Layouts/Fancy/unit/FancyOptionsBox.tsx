'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as style from '../fancy.css';
import { useEffect, useState } from 'react';
import { OptionsType } from '@/types/fancy';
import useSearchQuery from '@/hooks/useSearchQuery';
import { useSearchParams } from 'next/navigation';

interface SearchQueryType {
  option: string;
}

const FancyOptionsBox = (option: OptionsType) => {
  const [opacityItem, setOpacityItem] = useState('');
  const { searchQuery, queryHandler } = useSearchQuery<SearchQueryType>({
    query: { option: '' },
  });
  const searchParams = useSearchParams();

  const optionItemOpacityHandler = (item: React.MouseEvent<HTMLDivElement>) => {
    const target = item.target as HTMLElement;
    setOpacityItem(target.innerHTML);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    setOpacityItem(params.get('option') as string);
  }, [searchQuery]);

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
            onClick={() => {
              optionItemOpacityHandler;
              queryHandler('option', sub.name);
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
