import { FancyListType } from '@/types/fancy';
import CarouselWithItem from '@/components/UI/Carousel/CarouselWithItem';

interface FancyUnitListProps {
  data: FancyListType['product'];
}

const FancyUnitList = ({ data }: FancyUnitListProps) => {
  return (
    <div>
      <CarouselWithItem image={data} count={3} transform={33.3} />
    </div>
  );
};

export default FancyUnitList;
