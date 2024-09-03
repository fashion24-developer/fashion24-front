import { FancyUnitType } from './fancy';

export interface CartItemType {
  id: number;
  fancyId: number;
  count: number;
}

export interface CartStateType {
  state: boolean;
  selectItem: Dispatch<SetStateAction<never[]>>;
}

export interface selectItemType {
  cartId: number;
  price: number;
  count: number;
}

export type CartItemListType = FancyUnitType & CartItemType;
export type CartItemPropType = FancyUnitType & CartItemType & CartStateType;

export interface CartAddItemType {
  fancyId: number;
  count: number;
  options: {
    id: number;
    name: string;
    selectSubOption: string;
  };
}
