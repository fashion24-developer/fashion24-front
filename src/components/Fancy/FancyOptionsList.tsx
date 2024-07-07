'use client';
import FANCY from '@/apis/fancy';
import { FancyCategory } from '@/types/fancy';
import { useEffect, useState } from 'react';

const FancyOptionsList = () => {
  const [getFashionOptions, setFashionOptions] = useState<FancyCategory[]>([]);

  const getFancyApi = async () => {
    const response = await FANCY.fancyOptionsListApi();
    setFashionOptions(response);
  };

  useEffect(() => {
    getFancyApi();
  }, []);

  return (
    <>
      {getFashionOptions.map(data => {
        return <div>{data.categoryName}</div>;
      })}
    </>
  );
};

export default FancyOptionsList;
