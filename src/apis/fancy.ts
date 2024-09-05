import { AxiosResponse } from 'axios';
import { instance, mockInstance } from './axiosInstance';
import {
  FancyCategory,
  FancyListType,
  FancyPaginationParams,
  FancyPaginationType,
  FancyUnitType,
} from '@/types/fancy';

const FANCY = {
  path: '/fancy',

  //fancy페이지 옵션 리스트 불러오는 api
  async fancyOptionsListApi(): Promise<FancyCategory[]> {
    const result: AxiosResponse = await mockInstance.get(
      `${FANCY.path}/options`
    );
    return result.data;
  },

  //fancy 페이지 네이션 api(infinite scroll)
  async fancyListPagination({
    page,
    pageSize,
  }: FancyPaginationParams): Promise<FancyPaginationType> {
    const result: AxiosResponse = await mockInstance.get(`${FANCY.path}`, {
      params: {
        page: page,
        pageSize: pageSize,
      },
    });
    return result.data;
  },

  //fancy unit 불러오는 api
  async fancyUnitItemApi(id: number): Promise<FancyUnitType> {
    const result: AxiosResponse = await mockInstance.get(`${FANCY.path}/${id}`);
    return result.data;
  },
};

export default FANCY;
