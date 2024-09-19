import { FancyUnitBodyType } from '@/types/fancy';
import * as style from '../fancy.css';
import FancyOptionsBox from './FancyOptionsBox';

const FancyBodyInfo = (props: FancyUnitBodyType) => {
  return (
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
  );
};

export default FancyBodyInfo;
