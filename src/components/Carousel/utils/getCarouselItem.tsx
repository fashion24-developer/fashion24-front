import StepListWithDetail from '../items/StepListWithDetail';
import StepListWithoutDetail from '../items/StepListWithoutDetail';

/**캐러셀의 아이템의 형태
 * @param {type} : withDetail(detail요소 포함) | withoutDetail(detail요소 제외)
 * @param {data} : 실제 데이터 값 (해당 값은 나중에 react 제공 children props 값으로 변경 가능 )
 */
const getCarouselItem = (type: 'withDetail' | 'withoutDetail', data: any) => {
  const obj = {
    withDetail: <StepListWithDetail data={data} />,
    withoutDetail: <StepListWithoutDetail data={data} />,
  } as const;
  return obj[type];
};

export default getCarouselItem;
