import { now } from 'three/examples/jsm/libs/tween.module.js';
import * as styles from './pagination.css';
import { Dispatch, SetStateAction, use, useEffect, useState } from 'react';

export interface PaginationProps {
  page: number; //현재 페이지
  totalPage: number; //총 페이지,
  setPage: Dispatch<SetStateAction<number>>; //페이지 수정
}

export default function Pagination({
  page,
  totalPage,
  setPage,
}: PaginationProps) {
  const [nowPage, setNowPage] = useState(0);
  const buttonHandler = (page: number) => {
    setPage(page);
  };
  const [paginationList, setPaginationList] = useState<number[][]>([]);

  //나중에 페이지 저장 기능 구현
  //2차원 배열로 만들어서 페이지네이션 진행
  const getPaginationList = () => {
    const totalPageArr = Array.from({ length: totalPage }, (_, i) => i + 1);
    const tempArr = [];
    for (let i = 0; i <= totalPage; i += 5) {
      tempArr.push(totalPageArr.slice(i, i + 5));
    }
    setPaginationList(tempArr);
  };

  //각 버튼 핸들러
  const onClickPageButton = (type: 'next' | 'prev') => {
    if (type === 'next') {
      if (nowPage >= paginationList.length - 1) {
        //모달로 변경
        alert('마지막 페이지입니다.');
      } else {
        setNowPage(nowPage + 1);
        setPage(paginationList[nowPage + 1][0]);
      }
    }
    if (type === 'prev') {
      if (nowPage <= 0) {
        alert('첫 페이지입니다.');
      } else {
        setNowPage(nowPage - 1);
        setPage(paginationList[nowPage - 1][4]);
      }
    }
  };

  //첫 마운트 시 페이지 불러오기
  useEffect(() => {
    getPaginationList();
  }, []);

  return (
    <div className={styles.paginationContainer}>
      <button onClick={() => onClickPageButton('prev')}>&lt;</button>
      {paginationList[nowPage]?.map(num => {
        return (
          <>
            {page === num ? (
              <button
                className={styles.pageButton}
                key={`paginationKey${num}`}
                style={{ backgroundColor: 'rgba(0, 0, 0)', color: 'white' }}
                onClick={() => buttonHandler(num)}
              >
                {num}
              </button>
            ) : (
              <button
                className={styles.pageButton}
                key={`paginationKey${num}`}
                onClick={() => buttonHandler(num)}
              >
                {num}
              </button>
            )}
          </>
        );
      })}
      <button onClick={() => onClickPageButton('next')}>&gt;</button>
    </div>
  );
}
