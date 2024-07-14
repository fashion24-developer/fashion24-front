/**fancy상품 리스트 api type */
export interface FancyCategory {
  id: number;
  image: string;
  categoryName: string;
}

export interface FancyListType extends FancyCategory {
  product: {
    id: number;
    name: string;
    price: number;
    tags: object;
    image: string;
  }[];
}
