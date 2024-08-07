'use client';
import { useEffect, useState } from 'react';
import * as S from './CarouselStyled';
import * as style from './carousel.css';
import { Container } from '@/styles/CommonStyled';
import useCarousel from '@/hooks/useCarousel';
import getCarouselItem from './utils/getCarouselItem';
import getCarouselButton from './utils/getCarouselButton';

export interface CarouselProps<T> {
  image: Array<any>;
  transform: number;
  count: number;
  type: 'withDetail' | 'withoutDetail';
  isAuto: boolean;
  displayButton: boolean;
}
/**
 * 캐러셀 Component
 * @param {image} : image가 담긴 배열을 넘겨줍니다.
 * @param {transform} : 한 페이지에 보여줄 이미지 크기
 * @param {count} : 한 페이지에 보여줄 캐러셀의 개 수
 * @param {type} : "detail요소가 들어가는지 들어가지 않는지"
 * @param {isAuto} : 캐러셀 자동 넘김
 * @param {displayButton} : 캐러셀 버튼 UI가 보일지 말지
 */

const Carousel = <T extends { image: string }>(props: CarouselProps<T>) => {
  const [getCarouselArr, setCarouselArr] = useState<CarouselProps<T>['image']>(
    []
  );
  const { slideRef, nextSlideHandler, prevSlideHandler } = useCarousel({
    image: getCarouselArr,
    transform: props.transform,
    count: props.count,
    isAuto: props.isAuto,
  });

  const getCarouselList = async () => {
    if (props.image.length !== 0) {
      const startData = props.image.filter((_, idx) => idx < 3);
      const endData = props.image.filter(
        (_, idx) => idx >= props.image.length - 4
      );
      const newList = [...endData, ...props.image, ...startData];
      setCarouselArr(newList);
    }
  };

  useEffect(() => {
    getCarouselList();
  }, []);

  return (
    <Container display="flex">
      {getCarouselButton('prev', prevSlideHandler, props.displayButton)}
      <div className={style.CarouselContainer}>
        <div ref={slideRef} className={style.CarouselRef}>
          {getCarouselArr.map((data, idx) => {
            return getCarouselItem(props.type, data);
          })}
        </div>
      </div>
      {getCarouselButton('next', nextSlideHandler, props.displayButton)}
    </Container>
  );
};

export default Carousel;
