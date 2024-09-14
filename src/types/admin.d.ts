export type AdminAddParamsType = {
  name: string;
  costPrice: number; //원가
  discountRate: number; //할인율
  description1: string; //설명
  description2: string; //설명2
  status: 'ACTIVE' | 'INACTIVE'; //상태
};
