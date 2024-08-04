'use client';
import FANCY from '@/apis/fancy';
import { FancyCategory } from '@/types/fancy';
import { useEffect, useState } from 'react';
import Carousel, { CarouselProps } from '@/components/UI/Carousel/Carousel';

const FancyOptionsCarousel = () => {
  const [getFancyOptions, setFancyOptions] = useState<
    CarouselProps<FancyCategory>
  >({
    image: [],
    transform: 25,
    count: 4,
    type: 'withoutDetail',
    isAuto: true,
    displayButton: false,
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
    <Carousel {...getFancyOptions}></Carousel>
  ) : (
    <>{/*스켈레톤 UI */}</>
  );
};

export default FancyOptionsCarousel;
