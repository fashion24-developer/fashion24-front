import Image from 'next/image';
import * as S from '../CarouselStyled';

const StepListWithoutDetail = ({ data }: any) => {
  return (
    <S.CarouselItem key={data.id} width="80%" height="100%">
      <Image src={data.image} width={252} height={480} alt="carousel" />
    </S.CarouselItem>
  );
};

export default StepListWithoutDetail;
