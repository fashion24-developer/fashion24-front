'use client';

import FANCY from '@/apis/fancy';
import { useEffect } from 'react';

const FancyUnitItem = ({ params }: { params: { item: string } }) => {
  const getUnitItem = async () => {
    const response = await FANCY.fancyUnitItemApi(Number(params.item));
    console.log(response);
  };

  useEffect(() => {
    getUnitItem();
  }, []);

  return <div>{params.item}</div>;
};

export default FancyUnitItem;
