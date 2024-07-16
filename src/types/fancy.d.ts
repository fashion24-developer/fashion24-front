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
