import Image from 'next/image';
import Link from 'next/link';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from '../carousel.css';

const StepListWithDetail = ({ data }: any) => {
  return (
    <div
      className={styles.CarouselItemStyle}
      style={assignInlineVars({ [styles.CarouselItem]: '33.3%' })}
      key={data.id}
    >
      <Link
        href={{
          pathname: `/fancy/${data.id}`,
        }}
        className={styles.carouselItemLink}
      >
        <div className={styles.carouselItemImageWrapper}>
          <Image src={data.image} alt={data.name} fill />
        </div>
        <div className={styles.carouselItemName}>{data.name}</div>
        <div className={styles.carouselItemPrice}>{data.price}</div>
        <div className={styles.carouselItemTags}>
          {data.tags.map((ele: any) => (
            <span key={ele.name} className={styles.carouselItemTag}>
              {ele.name}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default StepListWithDetail;
