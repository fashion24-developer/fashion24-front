'use client';
import FANCY from '@/apis/fancy';
import { FancyCategory } from '@/types/fancy';
import { useEffect, useState } from 'react';
import * as S from './FancyStyled';
import Image from 'next/image';
import { Container } from '@/styles/CommonStyled';
import useCarousel from '@/hooks/useCaruosel';

const FancyOptionsList = () => {
  const [getFancyOptions, setFancyOptions] = useState<FancyCategory[]>([]);
  const { slideRef, nextSlideHandler, prevSlideHandler } = useCarousel({
    image: getFancyOptions,
    transform: 33.3,
    count: 3,
  });

  const getFancyApi = async () => {
    const response = await FANCY.fancyOptionsListApi();
    if (response.length !== 0) {
      const startData = response.filter((_, idx) => idx < 3);
      const endData = response.filter((_, idx) => idx >= response.length - 4);
      const newList = [...endData, ...response, ...startData];
      setFancyOptions(newList);
    }
  };

  useEffect(() => {
    getFancyApi();
  }, []);

  return (
    <Container display="flex">
      <button onClick={prevSlideHandler}>prev</button>
      <S.CarouselContainer>
        <div ref={slideRef}>
          {getFancyOptions.map((data, idx) => {
            return (
              <S.CarouselItem key={idx}>
                <Image
                  src={data.categoryImage}
                  width={252}
                  height={480}
                  alt="carousel"
                />
                {data.id}
              </S.CarouselItem>
            );
          })}
        </div>
      </S.CarouselContainer>
      <button onClick={nextSlideHandler}>next</button>
    </Container>
  );
};

export default FancyOptionsList;
