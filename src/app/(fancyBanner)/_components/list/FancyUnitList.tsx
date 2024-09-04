import { FancyListType } from '@/types/fancy';
import Carousel from '@/components/Carousel/Carousel';

interface FancyUnitListProps {
  data: FancyListType['product'];
}

const FancyUnitList = ({ data }: FancyUnitListProps) => {
  return (
    <div>
      <Carousel
        image={data}
        count={3}
        transform={33.3}
        type="withDetail"
        isAuto={false}
        displayButton={true}
      />
    </div>
  );
};

export default FancyUnitList;
