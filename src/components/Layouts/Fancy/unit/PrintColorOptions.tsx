'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import * as style from '@/components/Layouts/Fancy/fancy.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { OptionsType } from '@/types/fancy';
import { useEffect, useState } from 'react';

interface PrintColorOptionsProps {
  selectedColors: OptionsType['subOptions'];
}

const PrintColorOptions = ({ selectedColors }: PrintColorOptionsProps) => {
  const [searchQuery, setSearchQuery] = useState({
    selectColor: '',
  });
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const colorHandler = (color: string) => {
    const updatedQuery = { ...searchQuery, selectColor: color };
    setSearchQuery(updatedQuery);
    updateSearchQuery(updatedQuery);
  };

  const updateSearchQuery = (updatedQuery: any) => {
    const params = new URLSearchParams(searchParams);
    Object.keys(updatedQuery).forEach(key => {
      if (updatedQuery[key]) {
        params.set(key, updatedQuery[key]);
      } else {
        params.delete(key);
      }
    });
    const queryString = params.toString();
    const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(updatedPath);
  };
  if (selectedColors) {
    return (
      <>
        {selectedColors.map(color => {
          return (
            <div
              onClick={() => colorHandler(color.name)}
              key={color.id}
              style={assignInlineVars({ [style.colorOptionVar]: color.name })}
              className={style.colorOption}
            ></div>
          );
        })}
      </>
    );
  }
};

export default PrintColorOptions;
