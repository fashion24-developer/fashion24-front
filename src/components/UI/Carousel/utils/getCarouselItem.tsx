import StepListWithDetail from '../items/StepListWithDetail';
import StepListWithoutDetail from '../items/StepListWithoutDetail';

const getCarouselItem = (type: 'withDetail' | 'withoutDetail', data: any) => {
  const obj = {
    withDetail: <StepListWithDetail data={data} />,
    withoutDetail: <StepListWithoutDetail data={data} />,
  } as const;
  return obj[type];
};

export default getCarouselItem;
