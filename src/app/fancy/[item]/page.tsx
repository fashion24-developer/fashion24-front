'use client';

import FANCY from '@/apis/fancy';
import FancyHeader from '@/components/Layouts/Fancy/FancyHeader';
import FancyUnitBody from '@/components/Layouts/Fancy/unit/FancyUnitBody';
import FancyUnitImages from '@/components/Layouts/Fancy/unit/FancyUnitImages';
import { FancyUnitType } from '@/types/fancy';
import { useEffect, useState } from 'react';
import * as global from '@/styles/global.css';
import * as util from '@/styles/utils/globalStyleUtils';

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
      <div
        className={global.globalDisplay}
        style={util.createGlobalDisplay({
          displayVar: 'flex',
          flexDirectionVar: 'row',
          justifyContentVar: 'center',
          alignItemVar: 'center',
        })}
      >
        <FancyUnitImages images={getUnitItem.images} />
        <FancyUnitBody {...getUnitItem} />
      </div>
    </div>
  );
};

export default FancyUnitItem;
