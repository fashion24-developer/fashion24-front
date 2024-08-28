import { FancyUnitType } from './fancy';

export interface CartItemType {
  id: number;
  fancyId: number;
  count: number;
}

export type CartItemListType = {
  fancy: FancyUnitType;
} & CartItemType;
