import { FancyUnitBodyType } from '@/types/fancy';
import * as style from '../fancy.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import FancyOptionsBox from './FancyOptionsBox';
import FancyBodyInfo from './FancyBodyInfo';
import FancyBodyResult from './FancyBodyResult';

const FancyUnitBody = (props: FancyUnitBodyType) => {
  return (
    <div className={style.bodyContentContainer}>
      <FancyBodyInfo {...props} />
      <FancyBodyResult {...props} />
    </div>
  );
};

export default FancyUnitBody;
