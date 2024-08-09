import Image from 'next/image';
import * as styles from '../carousel.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

const StepListWithoutDetail = ({ data }: any) => {
  return (
    <div
      className={styles.CarouselItemStyle}
      style={assignInlineVars({ [styles.CarouselItem]: '25%' })}
      key={data.id}
    >
      <div
        className={styles.carouselItemImageWrapper}
        style={assignInlineVars({ [styles.CarouselItemChild]: '200px' })}
      >
        <Image src={data.image} alt="carousel" fill />
      </div>
    </div>
  );
};

export default StepListWithoutDetail;
