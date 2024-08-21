'use client';

import FANCY from '@/apis/fancy';
import FancyHeader from '@/components/Layouts/Fancy/FancyHeader';
import FancyUnitBody from '@/components/Layouts/Fancy/unit/FancyUnitBody';
import FancyUnitImages from '@/components/Layouts/Fancy/unit/FancyUnitImages';
import { FancyUnitType } from '@/types/fancy';
import { useEffect, useState } from 'react';
import * as global from '@/styles/global.css';
import * as util from '@/styles/utils/globalStyleUtils';
import FancyUnitBottom from '@/components/Layouts/Fancy/unit/FancyUnitBottom';

const FancyUnitItem = ({ params }: { params: { item: string } }) => {
  const [getUnitItem, setUnitItem] = useState<FancyUnitType>();
  const getUnitItemApiHandler = async () => {
    const data = await FANCY.fancyUnitItemApi(Number(params.item));
    setUnitItem(data);
  };

  //나중에 server component로 변경(현재는 msw라 불가능)
  useEffect(() => {
    getUnitItemApiHandler();
  }, []);

  if (!getUnitItem) return <div>Loading</div>;

  return (
    <div>
      <FancyHeader />
      <div style={{ display: 'flex', margin: '0px 5%' }}>
        <FancyUnitImages
          images={getUnitItem.images}
          options={getUnitItem.options}
        />
        <FancyUnitBody {...getUnitItem} />
      </div>
      <FancyUnitBottom
        name={getUnitItem.name}
        description2={getUnitItem.description2}
      />
    </div>
  );
};

export default FancyUnitItem;
