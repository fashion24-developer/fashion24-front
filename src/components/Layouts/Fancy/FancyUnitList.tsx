import { FancyListType } from '@/types/fancy';
import Image from 'next/image';

interface FancyUnitListProps {
  data: FancyListType['product'];
}

const FancyUnitList = ({ data }: FancyUnitListProps) => {
  return (
    <div>
      {data.map((ele, idx) => {
        return (
          <div key={idx}>
            <Image
              src={ele.image}
              width={100}
              height={100}
              alt={`${ele.id}이미지`}
            />
            <div>{ele.name}</div>
            <div>{ele.price}</div>
            <div>
              {ele.tags.map(element => {
                return <div>{element.name}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FancyUnitList;
