import Image from 'next/image';
import * as styles from '../fancy.css';
import { FancyListType } from '@/types/fancy';
import FancyUnitList from './FancyUnitList';

interface CategoryImageLocationProps {
  data: FancyListType;
  side: number;
}

const CategoryImage = (data: { image: string; id: number }) => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={data.image}
        layout="fill"
        objectFit="cover"
        alt={`${data.id}이미지`}
      />
    </div>
  );
};

const CategoryItems = (props: {
  position: 'left' | 'right';
  data: FancyListType;
}) => {
  return (
    <div className={styles.itemBodyContainer[props.position]}>
      <div>{props.data.categoryName}</div>
      <FancyUnitList data={props.data.product} />
    </div>
  );
};

const CategoryImageLocation = ({ data, side }: CategoryImageLocationProps) => {
  return (
    <div className={styles.fancyUnitContainer}>
      {side % 2 === 0 ? (
        <>
          <CategoryImage image={data.image} id={data.id} />
          <CategoryItems position="left" data={data} />
        </>
      ) : (
        <>
          <CategoryItems position="right" data={data} />
          <CategoryImage image={data.image} id={data.id} />
        </>
      )}
    </div>
  );
};

export default CategoryImageLocation;
