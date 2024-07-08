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
  const { slideRef, handleSlideNext, handleSlidePrev } =
    useCarousel(getFancyOptions);

  const getFancyApi = async () => {
    const response = await FANCY.fancyOptionsListApi();
    setFancyOptions(response);
  };

  useEffect(() => {
    getFancyApi();
  }, []);

  return (
    <Container display="flex">
      <button onClick={handleSlidePrev}>prev</button>
      <S.CarouselContainer>
        <div ref={slideRef}>
          {getFancyOptions.map(data => {
            return (
              <S.CarouselItem>
                <Image
                  src={data.categoryImage}
                  width={252}
                  height={480}
                  alt="carousel"
                />
              </S.CarouselItem>
            );
          })}
        </div>
      </S.CarouselContainer>
      <button onClick={handleSlideNext}>next</button>
    </Container>
  );
};

export default FancyOptionsList;
