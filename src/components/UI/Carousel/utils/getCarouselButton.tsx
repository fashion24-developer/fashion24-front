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
    prev: <button onClick={onButton}>prev</button>,
    next: <button onClick={onButton}>next</button>,
  } as const;
  if (!display) return <></>;
  return obj[show];
};

export default getCarouselButton;
