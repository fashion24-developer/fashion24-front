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
    tags: {
      id: number;
      name: string;
      createdAt: string;
    }[];
    image: string;
  }[];
}

/**페이지네이션 params타입
 * @params {page} : 현재 페이지
 * @params {pageSize} : 한 번에 보여줄 페이지 개수
 */
export type FancyPaginationParams = {
  page: number;
  pageSize: number;
};

export type FancyPaginationType = {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  isLastPage: boolean;
  isFirstPage: boolean;
  contents: FancyListType[];
};

//fancy unit type
export interface FancyUnitType {
  id: number;
  name: string;
  category: string;
  costPrice: number; //원가
  price: number; //판매가
  discountRate: number;
  description1: string; //소옵션과 함께 들어가는 설명
  description2: string; //하단에 들어가는 설명
  quantity: number; //재고량
  status: 'ACTIVE' | 'INACTIVE';
  options: {
    id: number;
    name: string;
    subOptions: {
      id: number;
      name: string;
      price: number;
    }[];
  }[];
}

//fancy images type
export interface FancyImagesType {
  uuid: number;
  image: string;
  order: number;
}

export interface FancyUnitIntersectionType {
  data: FancyUnitType;
  images: FancyImagesType[];
}
