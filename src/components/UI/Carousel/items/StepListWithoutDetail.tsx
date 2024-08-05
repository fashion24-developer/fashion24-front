import Image from 'next/image';
import * as S from '../CarouselStyled';

const StepListWithoutDetail = ({ data }: any) => {
  return (
    <S.CarouselItem key={data.id} width="25%" height="50%">
      <Image src={data.image} width={230} height={350} alt="carousel" />
    </S.CarouselItem>
  );
};

export default StepListWithoutDetail;
