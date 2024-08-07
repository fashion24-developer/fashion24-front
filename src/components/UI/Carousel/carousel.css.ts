import { themeColor } from '@/styles/theme.css';
import { createVar, style } from '@vanilla-extract/css';

/**케러셀 아이템 컨테이너 */
export const CarouselContainer = style({
  overflow: 'hidden',
  backgroundColor: `${themeColor.color.bg}`,
  width: '100%',
});
/**컨테이너 하위 ref가 들어가는 div에 적용*/
export const CarouselRef = style({
  display: 'flex',
  transform: '1s',
});

export const itemWidth = createVar();
export const itemHeight = createVar();

/**케러셀 아이템 */
export const CarouselItem = style({
  width: `${itemWidth}`,
  textAlign: 'center',
  flex: 'none',
});

export const CarouselItemChild = style({
  width: '80%',
  height: `${itemHeight}`,
  position: 'relative',
});
