import { FancyUnitType } from './fancy';

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
    optionId: number;
    subOptionId: number;
  }[];
}

export type CartItemType = {
  fancyId: number; // 장바구니한 아이템
  id: number; // 장바구니 아이디
  name: string;
  category: string;
  options: {
    id: number;
    name: string;
    selectSubName: string;
  }[];
  count: number;
  costPrice: number; // 원가
  price: number; // 판매가
  discountRate: number; // 할인율
  image: string; // 대표이미지 한 장
};
