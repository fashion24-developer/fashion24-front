import { FancyUnitIntersectionType, FancyUnitType } from '@/types/fancy';
import Image from 'next/image';

const FancyUnitBody = (props: FancyUnitType) => {
  return (
    <div>
      <div>{props.name + '_' + props.category}</div>
      <div dangerouslySetInnerHTML={{ __html: props.description1 }}></div>
      <div>
        {props.options.map(data => {
          return (
            <div>
              {data.name}
              {data.subOptions.map(ele => {
                return (
                  <div>
                    <div>{ele.name}</div>
                    <div>{ele.price}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FancyUnitBody;
