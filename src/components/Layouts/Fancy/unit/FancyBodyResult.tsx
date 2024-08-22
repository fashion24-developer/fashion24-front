import { FancyUnitBodyType } from '@/types/fancy';
import * as style from '../fancy.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

const FancyBodyResult = (props: FancyUnitBodyType) => {
  return (
    <div className={style.resultContainer}>
      <div className={style.priceBox}>￦{props.price}</div>
      <div className={style.submitButtonBoxContainer}>
        <div className={style.submitButtonBox}>
          It's my taste on hold for now
        </div>
        <div
          className={style.submitButtonBox}
          style={assignInlineVars({ [style.buttonColorVar]: '#ff0000' })}
        >
          Like it so much i want to buy it now
        </div>
      </div>
    </div>
  );
};

export default FancyBodyResult;
