import Image from 'next/image';
import * as S from '../CarouselStyled';
import * as style from '../carousel.css';
import Link from 'next/link';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { themeColor } from '@/styles/theme.css';

const StepListWithDetail = ({ data }: any) => {
  return (
    <div
      style={assignInlineVars({ [style.CarouselItem]: '33.3%' })}
      key={data.id}
    >
      <Link
        href={{
          pathname: `/fancy/${data.id}`,
        }}
        style={{
          position: 'relative',
          textDecoration: 'none',
          color: `${themeColor.color.text}`,
        }}
      >
        <Image src={data.image} width={100} height={100} alt="carousel" />
        <div>{data.name}</div>
        <div>{data.price}</div>
        <div>
          {data.tags.map((ele: any) => {
            return <div>{ele.name}</div>;
          })}
        </div>
      </Link>
    </div>
  );
};

export default StepListWithDetail;
