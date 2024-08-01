import { FancyUnitIntersectionType } from '@/types/fancy';
import Image from 'next/image';

const FancyUnitBody = (props: FancyUnitIntersectionType) => {
  return (
    <div>
      <div>
        {props.images.map((data, idx) => {
          return (
            <div key={idx}>
              <Image src={data.image} width={100} height={100} alt="이미지" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FancyUnitBody;
