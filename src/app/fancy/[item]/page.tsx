'use client';

import FANCY from '@/apis/fancy';
import FancyHeader from '@/components/Layouts/Fancy/FancyHeader';
import FancyUnitBody from '@/components/Layouts/Fancy/FancyUnitBody';
import {
  FancyImagesType,
  FancyUnitIntersectionType,
  FancyUnitType,
} from '@/types/fancy';
import { useEffect, useState } from 'react';

const FancyUnitItem = ({ params }: { params: { item: string } }) => {
  const [getUnitItem, setUnitItem] = useState<FancyUnitType>();
  const [getUnitImages, setUnitImages] = useState<FancyImagesType[]>();
  const getUnitItemApiHandler = async () => {
    const data = await FANCY.fancyUnitItemApi(Number(params.item));
    // const images = await FANCY.fancyImagesApi(Number(params.item));
    setUnitItem(data);
    // setUnitImages(images);
  };

  useEffect(() => {
    getUnitItemApiHandler();
  }, []);

  return (
    <div>
      <FancyHeader />
      {getUnitItem ? <FancyUnitBody {...getUnitItem} /> : <div>loading</div>}
    </div>
  );
};

export default FancyUnitItem;
