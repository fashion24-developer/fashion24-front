import * as S from '../CarouselStyled';

/**캐러셀에 버튼을 불러오기 위한 객체 Util
 * @prop {show} : "prev"(이전 UI) | "next"(다음 UI)
 * @prop {onButton} : "버튼에 들어가는 이벤트"
 */
const getCarouselButton = (
  show: 'prev' | 'next',
  onButton: () => void,
  display: boolean
) => {
  const obj = {
    prev: (
      <div>
        <S.CarouselButtonBox deg="225deg" onClick={onButton} />
      </div>
    ),
    next: (
      <div>
        <S.CarouselButtonBox deg="45deg" onClick={onButton} />
      </div>
    ),
  } as const;
  if (!display) return <></>;
  return obj[show];
};

export default getCarouselButton;
