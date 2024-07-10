'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

interface CarouselProp {
  image: Array<object>;
  transform: number;
  auto: boolean;
}

/**Carousel hook
 * @params {image} : image가 담긴 배열
 * @params {transform} : 얼만큼씩 이미지를 넘길지 [-33.3]
 * @params {auto} : 자동으로 페이지를 넘길건지, 말건지 결정
 */
const useCarousel = (props: CarouselProp) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [isAuto, setIsAuto] = useState(props.auto);
  const slideRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /**다음 이미지 */
  const nextSlideHandler = () => {
    setCurrentSlide(currentSlide + 1);
    setIsAuto(false);
    //마지막 이미지일 경우
    if (currentSlide === props.image.length - 1) {
      fakeMotion('');
      setCurrentSlide(1);
    }
  };

  /**이전 이미지 */
  const prevSlideHandler = () => {
    setCurrentSlide(currentSlide - 1);
    setIsAuto(false);

    //맨 앞 사진일 경우
    if (currentSlide - 1 === 0) {
      fakeMotion('');
      setCurrentSlide(props.image.length - 1);
    }
  };

  /**자동 이미지 넘김 핸들러 */
  useEffect(() => {
    setTimeout(() => {
      setIsAuto(true);
    }, 3000);
  }, [nextSlideHandler, prevSlideHandler]);

  /**캐러셀 style지정 */
  useEffect(() => {
    if (slideRef.current !== null) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(${-props.transform * currentSlide}%)`;
    }
  }, [currentSlide]);

  /**setInterval를 활용해서 자동으로 캐러셀 넘기기 */
  useEffect(() => {
    if (isAuto) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prevSlide => {
          if (prevSlide === props.image.length - 1) {
            fakeMotion('');
            return 1;
          } else {
            return prevSlide + 1;
          }
        });
      }, 3000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAuto]);

  const fakeMotion = (char: string) => {
    if (slideRef.current !== null) {
      slideRef.current.style.transition = char;
    }
  };

  return { slideRef, nextSlideHandler, prevSlideHandler };
};

export default useCarousel;
