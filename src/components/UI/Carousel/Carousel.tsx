'use client';
import { useEffect, useState } from 'react';
import * as S from './CarouselStyled';
import Image from 'next/image';
import { Container } from '@/styles/CommonStyled';
import useCarousel from '@/hooks/useCarousel';

export interface CarouselProps<T> {
  image: Array<T>;
  transform: number;
  count: number;
}

const Carousel = <T extends { image: string }>(props: CarouselProps<T>) => {
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
              <S.CarouselItem key={idx}>
                <Image
                  src={data.image}
                  width={252}
                  height={480}
                  alt="carousel"
                />
              </S.CarouselItem>
            );
          })}
        </div>
      </S.CarouselContainer>
      <button onClick={nextSlideHandler}>next</button>
    </Container>
  );
};

export default Carousel;
