import { FancyUnitBodyType } from '@/types/fancy';
import * as style from '../fancy.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import FancyOptionsBox from './FancyOptionsBox';

const FancyUnitBody = (props: FancyUnitBodyType) => {
  return (
    <div>
      <div className={style.bodyContentContainer}>
        <div>
          <div style={{ display: 'flex' }}>
            <div className={style.bodyTitleBox}>{props.name}</div>
            <div className={style.bodyTitleCategory}>_{props.category}</div>
          </div>
          <div
            className={style.bodyDescriptionBox}
            dangerouslySetInnerHTML={{ __html: props.description1 }}
          ></div>
          <div>
            {props.options.map(data => {
              return <FancyOptionsBox {...data} />;
            })}
          </div>
        </div>
        <div>
          <div className={style.priceBox}>{props.price}</div>
          <div className={style.submitButtonBoxContainer}>
            <div className={style.submitButtonBox}>shopping basket</div>
            <div className={style.submitButtonBox}>immediate purchase</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyUnitBody;
