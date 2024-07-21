'use client';

import FANCY from '@/apis/fancy';
import { FancyListType } from '@/types/fancy';
import { useCallback, useEffect, useRef, useState } from 'react';
import CategoryImageLocation from './CategoryImageLocaion';

const FancyOptionsList = () => {
  const [getFancyList, setFancyList] = useState<FancyListType[]>([]);
  const [page, setPage] = useState(0);
  const obsRef = useRef<HTMLDivElement>(null); //옵저버 state
  const preventRef = useRef(true); //옵저버 중복 방지
  const [isFetching, setFetching] = useState(false); //값을 불러왔는지 판다하기 위한 state
  const [hasNextPage, setNextPage] = useState(true); //다음 페이지가 존재하는지 판별

  //옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(handleObs, { threshold: 0.1 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, [obsRef, getFancyList]);

  //옵져버를 만났을 때 실행되는 함수
  const handleObs = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setPage(prev => prev + 1); //페이지 값 증가
    }
  };

  const fancyListApi = useCallback(async () => {
    const response = await FANCY.fancyListPagination({
      page: page,
      pageSize: 3,
    });
    setFancyList(prev => [...prev, ...response.contents]);
    setNextPage(!response.isLastPage);
    setFetching(false);
  }, [page]);

  useEffect(() => {
    if (hasNextPage && !isFetching) fancyListApi();
  }, [page]);

  return (
    <div>
      <div>
        {getFancyList.map((data, idx) => (
          <CategoryImageLocation data={data} side={idx} />
        ))}
      </div>
      <div ref={obsRef}></div>
    </div>
  );
};

export default FancyOptionsList;
