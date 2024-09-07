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

export const cartAtom = atom<CartAtomType>({
  fancyId: 0,
  options: [],
});
