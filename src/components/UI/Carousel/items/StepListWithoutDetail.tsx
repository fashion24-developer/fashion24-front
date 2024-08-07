import Image from 'next/image';
import * as S from '../CarouselStyled';
import * as style from '../carousel.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

const StepListWithoutDetail = ({ data }: any) => {
  return (
    <div
      style={assignInlineVars({ [style.CarouselItem]: '25%' })}
      key={data.id}
    >
      <div style={assignInlineVars({ [style.CarouselItemChild]: '50' })}>
        <Image
          src={data.image}
          layout="fill"
          objectFit="cover"
          alt="carousel"
        />
      </div>
    </div>
  );
};

export default StepListWithoutDetail;
