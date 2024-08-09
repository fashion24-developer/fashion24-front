'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

interface CarouselProp {
  image: Array<object>;
  transform: number;
  count: number;
  isAuto: boolean;
}

/**Carousel hook
 * @param {image} : image가 담긴 배열
 * @param {transform} : 얼만큼씩 이미지를 넘길지 [-33.3]
 * @param {count} : 한 페이지에서 보여줄 개수
 * @param {isAuto} : 자동 스크롤 true, false
 */
const useCarousel = (props: CarouselProp) => {
  const [currentSlide, setCurrentSlide] = useState<number>(props.count + 1);
  const [isAuto, setIsAuto] = useState(true); //나중에 필요시 추가 예정
  const slideRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [getTransition, setTransition] = useState(true);

  /**다음 이미지 */
  const nextSlideHandler = () => {
    setCurrentSlide(currentSlide + 1);
    setIsAuto(false);
    setTransition(true);

    //마지막 이미지일 경우
    if (currentSlide === props.image.length - props.count) {
      setTransition(false);
      setCurrentSlide(props.count + 1);
    }
  };

  /**이전 이미지 */
  const prevSlideHandler = () => {
    setCurrentSlide(currentSlide - 1);
    setTransition(true);
    setIsAuto(false);

    //맨 앞 사진일 경우
    if (currentSlide - 1 === 0) {
      setTransition(false);
      setCurrentSlide(props.image.length - props.count - props.count);
    }
  };

  /**자동 이미지 넘김 핸들러 */
  useEffect(() => {
    setTimeout(() => {
      if (props.isAuto) {
        setIsAuto(true);
      }
    }, 3000);
  }, [nextSlideHandler, prevSlideHandler]);

  /**캐러셀 style지정 */
  useEffect(() => {
    if (slideRef.current !== null) {
      if (getTransition) {
        slideRef.current.style.transition = 'all 0.5s ease-in-out';
      } else {
        slideRef.current.style.transition = '';
      }
      slideRef.current.style.transform = `translateX(${-props.transform * currentSlide}%)`;
    }
  }, [currentSlide, getTransition]);

  /**setInterval를 활용해서 자동으로 캐러셀 넘기기 */
  useEffect(() => {
    if (props.isAuto) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prevSlide => {
          if (prevSlide === props.image.length - props.count) {
            setTransition(false);
            return props.count + 1;
          } else {
            setTransition(true);
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
  }, [isAuto, props]);

  /**가짜 이미지를 앞 뒤로 끼워넣어서 자연스럽게 변할 수 있도록 함 */
  const fakeMotion = (char: string) => {
    if (slideRef.current !== null) {
      slideRef.current.style.transition = char;
    }
  };

  return { slideRef, nextSlideHandler, prevSlideHandler };
};

export default useCarousel;
