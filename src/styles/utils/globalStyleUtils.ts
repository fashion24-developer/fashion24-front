import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
  alignItemsVar,
  displayVar,
  flexDirectionVar,
  justifyContentVar,
} from '../global.css';
import { displayType } from '@/types/css';

/**vanilla extract은 css.ts파일 내부에는 순수 css파일들만 존재해야 합니다. 
함수가 존재하면 안됨 그래서 따로 파일을 빼서 관리*/
export const createGlobalDisplay = (props: displayType) =>
  assignInlineVars({
    [displayVar]: props.displayVar,
    [flexDirectionVar]: props.flexDirectionVar,
    [justifyContentVar]: props.justifyContentVar,
    [alignItemsVar]: props.alignItemVar,
  });
