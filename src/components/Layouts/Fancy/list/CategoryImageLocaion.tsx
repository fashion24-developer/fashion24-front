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
    <S.ImageContainer>
      <Image
        src={data.image}
        width={160}
        height={250}
        alt={`${data.id}이미지`}
      ></Image>
    </S.ImageContainer>
  );
};

const CategoryItems = (props: {
  position: 'left' | 'right';
  data: FancyListType;
}) => {
  return (
    <S.ItemBodyContainer position={props.position}>
      <div>{props.data.categoryName}</div>
      <FancyUnitList data={props.data.product} />
    </S.ItemBodyContainer>
  );
};

const CategoryImageLocation = ({ data, side }: CategoryImageLocationProps) => {
  return side % 2 === 0 ? (
    <S.FancyUnitContainer>
      <CategoryImage image={data.image} id={data.id} />
      <CategoryItems position="left" data={data} />
    </S.FancyUnitContainer>
  ) : (
    <S.FancyUnitContainer>
      <CategoryItems position="right" data={data} />
      <CategoryImage image={data.image} id={data.id} />
    </S.FancyUnitContainer>
  );
};

export default CategoryImageLocation;
