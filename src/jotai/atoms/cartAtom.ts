import { atom } from 'jotai';

interface CartAtomType {
  fancyId: number;
  options: {
    optionId: number;
    name: string;
    subOptionId: number;
    selectSubOption: string;
  }[];
}

interface paymentPriceType {
  state: {
    id: number;
  }[];
  price: number;
}

export const cartAtom = atom<CartAtomType>({
  fancyId: 0,
  options: [],
});

export const paymentPrice = atom<paymentPriceType>({
  state: [],
  price: 0,
});
