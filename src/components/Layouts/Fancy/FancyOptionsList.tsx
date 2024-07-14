'use client';
import FANCY from '@/apis/fancy';
import { FancyCategory } from '@/types/fancy';
import { useEffect, useState } from 'react';
import * as S from './FancyStyled';
import Image from 'next/image';
import { Container } from '@/styles/CommonStyled';
import useCarousel from '@/hooks/useCaruosel';
import Carousel, { CarouselProps } from '@/components/UI/Carousel/Carousel';

const FancyOptionsList = () => {
  const [getFancyOptions, setFancyOptions] = useState<
    CarouselProps<FancyCategory>
  >({
    image: [],
    transform: 33.3,
    count: 3,
  });

  const getFancyApi = async () => {
    const response = await FANCY.fancyOptionsListApi();
    setFancyOptions(prev => {
      return {
        ...prev,
        image: response,
      };
    });
  };

  useEffect(() => {
    getFancyApi();
  }, []);

  return getFancyOptions.image.length !== 0 ? (
    <Carousel {...getFancyOptions} />
  ) : (
    <></>
  );
};

export default FancyOptionsList;
