import Image from 'next/image';
import * as S from '../FancyStyled';
import { FancyListType } from '@/types/fancy';
import FancyUnitList from './FancyUnitList';

interface CategoryImageLocationProps {
  data: FancyListType;
  side: number;
}

const CategoryImage = (data: { image: string; id: number }) => {
  return (
    <Image
      src={data.image}
      width={100}
      height={100}
      alt={`${data.id}이미지`}
    ></Image>
  );
};

const CategoryImageLocation = ({ data, side }: CategoryImageLocationProps) => {
  return side % 2 === 0 ? (
    <S.FancyUnitContainer>
      <CategoryImage image={data.image} id={data.id} />
      <div>{data.categoryName}</div>
      <FancyUnitList data={data.product} />
    </S.FancyUnitContainer>
  ) : (
    <S.FancyUnitContainer>
      <FancyUnitList data={data.product} />
      <CategoryImage image={data.image} id={data.id} />
      <div>{data.categoryName}</div>
    </S.FancyUnitContainer>
  );
};

export default CategoryImageLocation;
