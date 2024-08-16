import { FancyUnitBottomType } from '@/types/fancy';
import * as style from '../fancy.css';

const FancyUnitBottom = (props: FancyUnitBottomType) => {
  return (
    <div className={style.bottomContainer}>
      <div>{props.name}</div>
      <div
        className={style.bottomContentDescription}
        dangerouslySetInnerHTML={{ __html: props.description2 }}
      ></div>
    </div>
  );
};

export default FancyUnitBottom;
