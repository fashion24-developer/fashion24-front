import Image from 'next/image';
import * as S from '../CarouselStyled';
import Link from 'next/link';

const StepListWithDetail = ({ data }: any) => {
  return (
    <S.CarouselItem key={data.id} width="33.3%" height="85%">
      <Link
        href={{
          pathname: `/fancy/${data.id}`,
        }}
        style={{
          width: 'auto',
          height: 'auto',
        }}
      >
        <Image src={data.image} width={150} height={250} alt="carousel" />
        <div>{data.name}</div>
        <div>{data.price}</div>
        <div>
          {data.tags.map((ele: any) => {
            return <div>{ele.name}</div>;
          })}
        </div>
      </Link>
    </S.CarouselItem>
  );
};

export default StepListWithDetail;
