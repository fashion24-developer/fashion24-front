'use client';

import FANCY from '@/apis/fancy';
import { FancyUnitType } from '@/types/fancy';
import { useEffect, useState } from 'react';
import FancyUnitImages from '../../_components/unit/FancyUnitImages';
import FancyUnitBody from '../../_components/unit/FancyUnitBody';
import FancyUnitBottom from '../../_components/unit/FancyUnitBottom';
import { useSetAtom } from 'jotai';
import { cartAtom } from '@/jotai/atoms/cartAtom';

const FancyUnitItem = ({ params }: { params: { item: string } }) => {
  const [getUnitItem, setUnitItem] = useState<FancyUnitType>();
  const setFancyId = useSetAtom(cartAtom);
  const getUnitItemApiHandler = async () => {
    const data = await FANCY.fancyUnitItemApi(Number(params.item));
    setUnitItem(data);
  };

  //나중에 server component로 변경(현재는 msw라 불가능)
  useEffect(() => {
    getUnitItemApiHandler();
    setFancyId(prev => {
      return {
        ...prev,
        fancyId: Number(params.item),
      };
    });
  }, []);

  //로딩 컴포넌트 추가 필요
  if (!getUnitItem) return <div>Loading</div>;

  return (
    <div>
      <div style={{ display: 'flex', margin: '0px 5%' }}>
        <FancyUnitImages
          id={getUnitItem.id}
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
