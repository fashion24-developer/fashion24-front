'use client';
import { useEffect, useState } from 'react';
import * as S from './CarouselStyled';
import Image from 'next/image';
import { Container } from '@/styles/CommonStyled';
import useCarousel from '@/hooks/useCarousel';

export interface CarouselProps<T> {
  image: Array<any>;
  transform: number;
  count: number;
}

/**
 * 캐러셀 Component 중 item이 포함된
 * @param {image} : image가 담긴 배열을 넘겨줍니다.
 * @param {transform} : 한 페이지에 보여줄 이미지 크기
 * @param {count} : 한 페이지에 보여줄 캐러셀의 개 수
 */
const CarouselWithItem = <T extends { image: string }>(
  props: CarouselProps<T>
) => {
  const [getCarouselArr, setCarouselArr] = useState<CarouselProps<T>['image']>(
    []
  );
  const { slideRef, nextSlideHandler, prevSlideHandler } = useCarousel({
    image: getCarouselArr,
    transform: 33.3,
    count: 3,
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
      <button onClick={prevSlideHandler}>prev</button>
      <S.CarouselContainer>
        <div ref={slideRef}>
          {getCarouselArr.map((data, idx) => {
            return (
              <S.CarouselItem key={idx} width="50%" height="60%">
                <Image
                  src={data.image}
                  width={252}
                  height={480}
                  alt="carousel"
                />
                <div>{data.name}</div>
                <div>{data.price}</div>
                <div>
                  {data.tags.map((ele: any) => {
                    return <div>{ele.name}</div>;
                  })}
                </div>
              </S.CarouselItem>
            );
          })}
        </div>
      </S.CarouselContainer>
      <button onClick={nextSlideHandler}>next</button>
    </Container>
  );
};

export default CarouselWithItem;
