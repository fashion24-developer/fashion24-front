import Image from 'next/image';
import * as S from '../CarouselStyled';

const StepListWithDetail = ({ data }: any) => {
  return (
    <S.CarouselItem key={data.id} width="50%" height="50%">
      <Image src={data.image} width={252} height={480} alt="carousel" />
      <div>{data.name}</div>
      <div>{data.price}</div>
      <div>
        {data.tags.map((ele: any) => {
          return <div>{ele.name}</div>;
        })}
      </div>
    </S.CarouselItem>
  );
};

export default StepListWithDetail;
